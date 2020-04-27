import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from './../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from './../errorMessage';
import PropTypes from 'prop-types'


const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`

const RandomTerm = styled.span`
    font-weight: bold;
`

export default class RandomChar extends Component {
    gotService = new GotService() 

    state = {
        char: {},
        loading: true,
        error: false
    }

    
    static defaultProps = {
        interval: 1000
    }

    static propTypes = {
        interval: PropTypes.number
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
        loading: false
    })
    }

    componentDidMount = () => {
        this.updateCharacter();
        this.timerId = setInterval(this.updateCharacter,this.props.interval)
    }

    componentWillUnmount = () => {
        clearInterval(this.timerId);
    }

    updateCharacter = () => {
        const id = Math.floor(Math.random()*140+25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        }) 
    }

    render() {
        console.log('render')

        const {char, loading, error} = this.state;
        const errorMessage = error? <ErrorMessage/>:null;
        const spinner = loading? <Spinner/>:null
        const content = (!loading && !error)?<View char={char}/>:null;


        return (
            <RandomBlock className='rounded'>
                {errorMessage}
                {spinner}
                {content}
            </RandomBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return(
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <RandomTerm>Gender</RandomTerm>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <RandomTerm>Born</RandomTerm>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <RandomTerm>Died</RandomTerm>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <RandomTerm>Culture</RandomTerm>
                    <span>{culture}</span>
                </li>
            </ul>
            
        </>
    )
}
