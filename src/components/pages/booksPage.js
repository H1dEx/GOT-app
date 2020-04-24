import React, {Component} from 'react';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';

export default class BooksPage extends Component {
    gotService = new GotService();

    state = {
        selectedBook: null,
        error: null
    }

    onItemSelected = (id) => {
        this.setState({selectedBook: id})
    }

    componentDidCatch = () => {
        this.setState({error: true})
    } 

    render() {

        if(this.state.error) return <ErrorMessage/>

        const itemList = (<ItemList 
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllBooks}
            renderItem={(item)=>`${item.name} (${item.released})`}
        />)

        const bookDetails = (
            <ItemDetails itemId={this.state.selectedBook} getItem={this.gotService.getBook}>
                <Field field='numberOfPages' label='NumberOfPages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={bookDetails}/>
        )
    }
}