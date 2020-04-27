import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import PropTypes from 'prop-types';

const ItemLi = styled.li`
    cursor: pointer;
`
const ItemDiv = styled.div`
    background-color: #fff;
    border-radius: 1.5rem;
`

function ItemList({getData, onItemSelected, renderItem}) {

    const [itemList, updateList] = useState([]);

    useEffect(()=>{ 
        getData()
            .then( (data) => updateList(data));
    },[])


    const renderItems = (arr) => {
        return arr.map( (el,i) => {
            const label = renderItem(el);
            
            return (<ItemLi key={i} 
                className="list-group-item d-flex justify-content-between" onClick={()=>{onItemSelected(i+1)}}>
                    {label}
            </ItemLi>)
            })
        }

        if(!itemList) return <Spinner/>
        const items = renderItems(itemList);
        
        return (
            <ItemDiv>
            <ul className="list-group list-group-flush">
                {items}
            </ul>
            </ItemDiv>

        );
}

ItemList.defaultProps = {
    onItemSelected: () => {}
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
}

export default ItemList;