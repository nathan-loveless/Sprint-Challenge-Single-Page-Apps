import React, { useEffect, useState } from "react";
import { Route, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import axios from 'axios';
import styled from "styled-components";

const Main = styled.div.attrs({
  className: 'main'
})`

`;

const HeaderButton = styled.div.attrs({
  className: 'header-button'
})`
    margin: 10px;
    width: 100px;
    height: 25px;
    text-decoration: none;
    text-align: center;
    border: 1px solid black;
    padding: 5px;
    color: white;
    background: lightblue;
`;

export default function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
// TODO: Add API Request here - must run in `useEffect`
//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
async function fetchData() {
  try {
    const characterList = await axios.get(
      "https://rickandmortyapi.com/api/character/"
    );
    setCharacterList(characterList.data.results);
  } catch (err) {
    console.log(err);
  }
}
fetchData();
}, []);


  return (
    <Main className='main'>
      <HeaderButton className='header-button'><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link></HeaderButton>
      <HeaderButton className='header-button'><Link style={{ textDecoration: 'none', color: 'white' }} to="/character-list">Character List</Link></HeaderButton>

      <Route exact path="/" component={Header} />
      <Route exact path="/character-list" render={props => <CharacterList chars={characterList} {...props} />}/>
      <Route path="/character-list/:id" render={props => <CharacterCard chars={characterList} {...props} />}/>
    </Main>
  );
}
