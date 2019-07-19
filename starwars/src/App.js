import React, { useState, useEffect } from 'react';
import './App.css';
import Character from "./components/Character.js";

import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect( () => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        const characters = response.data.results;
        setCharacters(characters);
      })
      .catch(err => console.log('SWAPI is down: ', err))
  }, []);
  console.log(characters[1]);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {characters.map( e => <Character charName={e.name}/>)}
    </div>
  );
}

export default App;
