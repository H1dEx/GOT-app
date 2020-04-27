import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Button} from 'reactstrap';

const StyledSpan = styled.span`
    color: white;
    display: block;
    font-size: 26px
`


const Page404 = (props) => {
    return (
        <>
            <StyledSpan>Error 404.Page not found.</StyledSpan>
            <Link to='/welcome'><Button>Go to main page</Button></Link>
        </>
    )
}

export default Page404;