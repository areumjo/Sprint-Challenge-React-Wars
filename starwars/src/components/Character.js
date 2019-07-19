import React, {useEffect, useState} from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
    width: 50%;
    border: 1px solid red;
    background-color: rgba(255, 255, 255, .5) ;
`;
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 1em 1em;
  border-radius: 50%;
`;

function Character(props) {
    console.log(props);
    return (
        <WrapperDiv>
            <p>Say hi to</p>
            <h3>{props.charName}</h3>
            <p>Born is {props.charBirthYear}</p>
            <p>{props.charHeight}</p>
            <p>{props.charMass}</p>
            <div>
                <p>Eye color</p>
                <Button></Button>
            </div>
            <p>{props.charEyeColor}</p>
        </WrapperDiv>
    )
}

export default Character;