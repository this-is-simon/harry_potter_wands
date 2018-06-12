import React from 'react';
import CharacterSelector from '../components/CharacterSelector.js';
import WandDetails from '../components/WandDetails.js';

class WandBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    }
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this)
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters/students';
    fetch(url)
    .then((response) => response.json())
    .then(charactersData => this.setState({characters: charactersData}))
    .catch(error => console.log("Error:", error))
  }

  handleCharacterSelected(index){
    const selectedCharacter = this.state.characters[index]
    this.setState({currentCharacter: selectedCharacter})
  }

  render(){
    console.log(this.state.currentCharacter);
    return(
      <div className="wand-box">
        <CharacterSelector
          characters={this.state.characters}
          onCharacterSelected={this.handleCharacterSelected}
        />
        <WandDetails
          character={this.state.currentCharacter}
        />
      </div>
    )
  }

}

export default WandBox;
