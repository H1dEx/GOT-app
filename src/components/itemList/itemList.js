import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const ItemLi = styled.li`
    cursor: pointer;
`
const ItemDiv = styled.div`
    background-color: #fff;
    border-radius: 1.5rem;
`

export default class ItemList extends Component {

    state = {
        itemList: null,
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then( (itemList) => {
                this.setState({
                    itemList
                })
            });
    }

    renderItems(arr)  {
        return arr.map( (el,i) => {
            const label = this.props.renderItem(el);
            
            return (<ItemLi     
                key={i} 
                className="list-group-item d-flex justify-content-between" onClick={()=>{this.props.onItemSelected(i)}}>
                    {label}
            </ItemLi>)
            })
        }


    render() {
        const {itemList} = this.state;
        if(!itemList) return <Spinner/>
        const items = this.renderItems(itemList);
        return (
            <ItemDiv>
            <ul className="list-group list-group-flush">
                {items}
            </ul>
            </ItemDiv>

        );
    }
}