import React from "react";
import styled from "styled-components";

const Foot = styled.div`
    background-color: rgba(255, 255, 255, .5) ;
    heigth: 100px;
    padding: 20px;
    margin-top: 50px;
`
const H3 = styled.h3`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
`

function Footer () {
    return (
        <Foot>
            <p>More infomation: </p>
            <H3><a href="https://swapi.co/">The Star Wars API</a></H3>
        </Foot>
    )
}

export default Footer;