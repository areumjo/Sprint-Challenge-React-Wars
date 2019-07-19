import React, {useEffect, useState} from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
    width: 300px;
    border-radius: 10%;
    background-color: rgba(255, 255, 255, .5);
    margin: 20px;
    padding: 20px;
`;

const H3 = styled.h3`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
`

function Character(props) {
    const Button = styled.button`
        background-color: ${props.charEyeColor};
        color: ${props.charEyeColor};
        opacity: 0.8;
        font-size: 1em;
        margin: 1em;
        padding: 1em 1em;
        border-radius: 50%;
    `;
    console.log(props);
    return (
        <WrapperDiv>
            <p>Say hi to</p>
            <H3>{props.charName}</H3><hr/>
            <p>Born is {props.charBirthYear}</p>
            <p>Heigth: {props.charHeigth}</p>
            <p>Mass: {props.charMass}</p>
            <div className="flex-container">
                <p>Eye color: </p>
                <Button></Button>
                <p>({props.charEyeColor})</p>
            </div>
        </WrapperDiv>
    )
}

export default Character;