import React from "react";
import styled from "styled-components";

const CharCard = styled.div.attrs({
  className: 'character-card'
})`
    background: lightgray;
    margin-left: 20px;
    width: 300px;
    border: 1px solid black;
    text-align: center;
`;

const Name = styled.div.attrs({
  className: 'name'
})`
    padding: 5px;
    background: lightgray;
    
`;

const Data = styled.div.attrs({
  className: 'data'
})`
border-top: 1px solid black;
padding: 5px;
background: coral;
`;

const Data2 = styled.div.attrs({
  className: 'data2'
})`
border-top: 1px solid black;
background: lightblue;
padding: 5px;
`;

const Data3 = styled.div.attrs({
  className: 'data3'
})`
background: lightgreen;
border-top: 1px solid black;
padding: 5px;
`;

export default function CharacterCard(props) {
  const character = props.chars.find(char => { return char.id === Number(props.match.params.id); });
   console.log(props.chars);
  return (

    <CharCard className='character-card'>
      <Name className='name'>{character.name}</Name>
      <img className="character-list-image" src={character.image} />
      <Data className='data'>{character.location.name}</Data>
      <Data2 className='data2'>{character.species}</Data2>
      <Data3 className='data3'>{character.status}</Data3>
    </CharCard>
      );
}
