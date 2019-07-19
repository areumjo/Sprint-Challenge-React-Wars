import React, { useState, useEffect } from 'react';
import './App.css';
import Character from "./components/Character.js";
import Footer from "./components/Footer.js";

import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [char, moreChar] = useState('');
  const [next, nextChar] = useState(2);
  const [prev, prevChar] = useState(8)

  const nextCharacter = (count, setCount) => {
    count > 8 ? setCount(1) : setCount(count+1);
    moreChar(`?page=${count}`)
  }

  const prevCharacter = (count, setCount) => {
    count < 2 ? setCount(8) : setCount(count-1);
    moreChar(`?page=${count}`)
  }

  useEffect( () => {
    axios
      .get(`https://swapi.co/api/people/${char}`)
      .then(response => {
        console.log(response.data);
        const characters = response.data.results;
        setCharacters(characters);
      })
      .catch(err => console.log('SWAPI is down: ', err))
  }, [char]);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <button
        onClick={() => prevCharacter(prev, prevChar)}>Previous</button>
      <button
        onClick={() => nextCharacter(next, nextChar)}>Next</button>
      <div className="flex-container">
        {characters.map( e => <Character charName={e.name} charHeigth={e.height} charMass={e.mass} charEyeColor={e.eye_color} charBirthYear={e.birth_year}/>)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
