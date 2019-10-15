import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div.attrs({
  className: 'character-list'
})`
    display: flex;
    flex-flow: wrap;    
`;

const Card = styled.div.attrs({
  className: 'character-card'
})`
    margin: 10px;
    background: lightgray;
    border: 1px solid black;
`;

const Title = styled.div.attrs({
  className: 'title'
})`
    background: lightgray;
`;


export default function CharacterList(props) {
          // TODO: Add useState to track data from useEffect


    return (
      <Container className="character-list">
        {props.chars.map(character => (
          <Card className="character-card" key={character.id}>
             <Link to={`/character-list/${character.id}`}>
             <Title className='title'><h2>{character.name}</h2></Title>
              <img src={character.image} />
            </Link>            
          </Card>
    ))}
      </Container>
    );
}
