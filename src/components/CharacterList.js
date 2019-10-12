import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const characterList = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        console.log(characterList.data.results);
        setCharacterList(characterList.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
  <section className="character-list">
      {characterList.map(character => {
        return (
          // <CharacterCard
          //   name={character.name}
          //   status={character.status}
          //   species={character.species}
          //   type={character.type}
          //   />
          <div>
            <h2>{character.name}</h2>
            <img src={character.image}></img>
          </div>
        );
      })}
    </section>
  );
}
