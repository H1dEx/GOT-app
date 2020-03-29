import React, {Component} from 'react';
import styled from 'styled-components';

const ItemLi = styled.li`
    cursor: pointer;
`
const ItemDiv = styled.div`
    background-color: #fff;
    border-radius: 1.5rem;
`


export default class ItemList extends Component {

    render() {
        return (
            <ItemDiv>
            <ul className="list-group list-group-flush">
            <ItemLi className="list-group-item d-flex justify-content-between">John Snow</ItemLi>
            <ItemLi className="list-group-item d-flex justify-content-between">Brandon Stark</ItemLi>
            <ItemLi className="list-group-item d-flex justify-content-between">Geremy</ItemLi>
            </ul>
            </ItemDiv>

        );
    }
}