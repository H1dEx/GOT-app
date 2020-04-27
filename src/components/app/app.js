import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import {CharactersPage, BooksPage, HousesPage, BooksItem, Page404} from '../pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Welcome = styled.div`
    color: white;
    font-size: 46px;
    border-bottom: 2px solid lightgray;
    text-align: center;
`

const ButtonBlock = styled.div`
    margin-bottom:50px;
`

export default class App extends Component {
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
        const randomCharacter = isShown?<RandomChar interval={1500}/>:null;
        if(this.state.error) return <ErrorMessage/>

        return (
            <Router>
               <div className="app"> 
                <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {randomCharacter}
                                <ButtonBlock><Button color="secondary" size="lg" block onClick={this.toggleRandomCharacter}>Toggle random character</Button></ButtonBlock>
                            </Col>
                        </Row>
                        <Switch>
                            <Route path={['/', '/welcome']} exact render={()=><Welcome>Welcome!</Welcome>}/>
                            <Route path="/characters" component={CharactersPage}/>
                            <Route path="/houses" component={HousesPage}/>
                            <Route path="/books" exact component={BooksPage}/>
                            <Route path="/books/:id" render={({match}) => <BooksItem bookId={match.params.id}/> }/>
                            <Route path="*" render={()=><Page404/>}/>
                        </Switch>
                    </Container> 
                </div>
            </Router>
        );
    }
};

