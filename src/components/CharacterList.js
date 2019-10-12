import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
          // TODO: Add useState to track data from useEffect
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
      <div className="character-list">
        {characterList.map(character => (
          <div className="character-card" key={character.id}>
             <Link to={`/character-list/${character.id}`}>
             <h2>{character.name}</h2>
              <img className="character-list-image" src={character.image} />
            </Link>            
          </div>
    ))}
    <Route path="/character-list/:id" render={props => <CharacterCard chars={characterList} {...props} />}/>
      </div>
    );
}
