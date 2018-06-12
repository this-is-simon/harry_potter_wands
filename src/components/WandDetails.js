import React from 'react';

const WandDetails = (props) => {
  if (!props.character) return null
  return (
    <div>
    <h2>{props.character.name}'s Wand:</h2>
    <ul>
      <li>Wood: {props.character.wand.wood}</li>
      <li>Core: {props.character.wand.core}</li>
      <li>Length: {props.character.wand.length}</li>
    </ul>
  </div>
  )
}

export default WandDetails;
