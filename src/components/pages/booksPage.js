import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import {withRouter} from 'react-router-dom';

class BooksPage extends Component {
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

        return (<ItemList 
            onItemSelected={(id) => {
                this.props.history.push(`${id}`)
            console.log(this.props)
        }}
            getData={this.gotService.getAllBooks}
            renderItem={(item)=>`${item.name} (${item.released})`}
        />)
    }
}

export default withRouter(BooksPage);