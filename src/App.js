import React from "react";
import { Route, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';


export default function App() {
  return (
    <main>
      <Link to="/">Home</Link>
      <Link to="/character-list">Character List</Link>

      <Route exact path="/" component={Header} />
      <Route exact path="/character-list" component={CharacterList} />
    </main>
  );
}
