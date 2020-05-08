import React from "react";
import { characters } from "../../data/characters";

class CharacterPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    this.setState({
      characters: characters,
    });
  }

  render() {
    return (
      <div className="margin-tb">
        <select
          name=""
          id="bg-light"
          onChange={this.props.onCharacterSelect}
          value={this.props.selectedChar}
          className="btn btn-primary p-2"
        >
          <option value="6">Hello</option>
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
export default CharacterPicker;
