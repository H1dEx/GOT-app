import React, {Component} from 'react';
import styled from 'styled-components';
import gotService from './../../services/gotService';
import Spinner from '../spinner';

const ItemLi = styled.li`
    cursor: pointer;
`
const ItemDiv = styled.div`
    background-color: #fff;
    border-radius: 1.5rem;
`

export default class ItemList extends Component {

    gotService = new gotService();
    state = {
        charList: null,
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then( (charList) => {
                this.setState({
                    charList
                })
            });
    }

    renderItems = (arr) => {
        return arr.map( (el,i) => {
            return  (<ItemLi 
                key={i} 
                className="list-group-item d-flex justify-content-between" onClick={()=>{this.props.onCharSelected(i+41)}}>
                    {el.name}
            </ItemLi>)
            })
        }


    render() {
        const {charList} = this.state;
        if(!charList) return <Spinner/>
        const items = this.renderItems(charList);
        return (
            <ItemDiv>
            <ul className="list-group list-group-flush">
                {items}
            </ul>
            </ItemDiv>

        );
    }
}