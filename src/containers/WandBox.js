import React from 'react';
import CharacterSelector from '../components/CharacterSelector.js';
// import WandSelector from '../components/WandSelector';

class WandBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    }
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters/students';
    fetch(url)
    .then((response) =>  response.json())
    .then(charactersData => this.setState({characters: charactersData}))
    .catch(error => console.log("Error:", error))
  }


  render(){
    return(
      <div className="wand-box">
        <CharacterSelector />
      </div>
    )
  }

}

export default WandBox;
