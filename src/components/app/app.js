import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import styled from 'styled-components';

const ButtonBlock = styled.div`
    margin-bottom:50px;
`

export default class App extends Component {
   state = {
       isShown: true
   }

   toggleRandomCharacter = () => {
       this.setState((state)=>({isShown:!state.isShown}));
   }
   
    render() {
        const {isShown} = this.state;
        const randomCharacter = isShown?<RandomChar/>:null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomCharacter}
                            <ButtonBlock><Button color="secondary" size="lg" block onClick={this.toggleRandomCharacter}>Toogle random character</Button></ButtonBlock>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

