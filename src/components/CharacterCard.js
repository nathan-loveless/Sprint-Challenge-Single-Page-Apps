import React from "react";

export default function CharacterCard(props) {
  const character = props.chars.find(char => { return char.id === Number(props.match.params.id); });

  return (
    <div>{character.name}</div>
  );
}
