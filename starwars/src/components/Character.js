import React, {useEffect, useState} from "react";

function Character(props) {
    console.log(props);
    return (
        <div>
            <h3>hi {props.charName}</h3>
        </div>
    )
}

export default Character;