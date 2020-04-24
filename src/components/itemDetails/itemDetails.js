import React, {Component} from 'react';
import styled from 'styled-components';

const ItemDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`

const Err = styled.span`
    color: white;
    font-size: 30px
`

const Field = ({item, field, label})=>{
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field}

export default class ItemDetails extends Component {
    state = {
        item: null
    }

    updateItem = () => {
        const {itemId} = this.props;
        if(!itemId) return;
        const {getItem} = this.props;
        getItem(itemId)
            .then(item => {
                this.setState({item})
        })
    }

    componentDidMount = () => {
        this.updateItem();
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.itemId !== prevProps.itemId) this.updateItem();
    }

    render() {
        if(!this.state.item) {
            return <Err>Please select item!</Err>
        }
        const {item} = this.state;
        const {name} = item;

        return (
            <ItemDetailsBlock className="rounded">
                <h4>{name}</h4>
                <ul className="list-group-flush">
                    {
                        React.Children.map(this.props.children, child => {
                           return React.cloneElement(child, {item})
                        })
                    }
                </ul>
                </ItemDetailsBlock>
        );
    }
}