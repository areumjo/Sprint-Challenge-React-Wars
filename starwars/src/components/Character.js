import React, {useEffect, useState} from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
    width: 400px;
    border-radius: 10%;
    background-color: rgba(255, 255, 255, .5);
    margin: 20px;
    padding: 20px;
`;

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
            <h3>{props.charName}</h3><hr/>
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