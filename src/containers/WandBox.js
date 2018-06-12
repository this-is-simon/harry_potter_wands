import React from 'react';
import CharacterSelector from '../components/CharacterSelector';
// import WandSelector from '../components/WandSelector';

class WandBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter: ''
    }
  }

  render(){
    return(
      <div className="wand-box">
        THIS IS THE WANDBOX
      </div>
    )
  }




}

export default WandBox;
