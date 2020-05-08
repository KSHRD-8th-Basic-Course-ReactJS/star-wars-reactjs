import React from "react";
import {
  characters
} from '../../data/characters'

class CharacterPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    this.setState({
      characters: characters
    })
  }

  render() {
    return (
      <div>
        <select
          name=""
          id=""
          onChange={this.props.onCharacterSelect}
          value={this.props.selectedChar}
          className={this.props.side}
        >
          {this.state.characters.map((char) => (
            <option key={char.id} value={char.id}>
              {char.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
export default CharacterPicker