import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../itemDetails';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import GotService from "../../services/gotService"
import BooksPage from '../pages/booksPage'

const ButtonBlock = styled.div`
    margin-bottom:50px;
`

export default class App extends Component {
    gotService = new GotService();
   state = {
       isShown: true,
       error: false
   }

   componentDidCatch= () => {
       this.setState({error: true})
   }

   toggleRandomCharacter = () => {
       this.setState((state)=>({isShown:!state.isShown}));
   }

    render() {
        const {isShown} = this.state;
        const randomCharacter = isShown?<RandomChar/>:null;
        if(this.state.error) return <ErrorMessage/>

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomCharacter}
                            <ButtonBlock><Button color="secondary" size="lg" block onClick={this.toggleRandomCharacter}>Toggle random character</Button></ButtonBlock>
                        </Col>
                    </Row>
                    {/* <CharacterPage/> */}
                    <BooksPage/>


                </>
            </>
        );
    }
};

