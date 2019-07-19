import React from "react";
import styled from "styled-components";

const Foot = styled.div`
    background-color: rgba(255, 255, 255, .5) ;
    heigth: 100px;
    padding: 20px;
    margin-top: 50px;
`

function Footer () {
    return (
        <Foot>
            <p>footer</p>
        </Foot>
    )
}

export default Footer;