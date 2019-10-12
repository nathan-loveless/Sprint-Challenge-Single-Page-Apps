import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';


export default function App() {
  return (
    <main>
      <Header />
      <CharacterList />
      <Route exact path="/" component={CharacterList} />
  <Route path="/item-list/:id" component={CharacterCard} />
    </main>
  );


}
