import React from 'react';

const CharacterSelector = (props) => {

  const characters = props.characters.map((character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  })

  function handleChange(event){
    props.onCharacterSelected(event.target.value);
  }

  return(
    <select className="character-select" onChange={handleChange}>
      <option disabled value="default">Choose a Student...</option>
      {characters}
    </select>
  )
}

export default CharacterSelector;
