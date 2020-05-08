import React from "react";
import Character from "./components/Character/Character";
import CharacterPicker from "./components/CharacterPicker/CharacterPicker";
import SideChooser from "./components/SideChooser/SideChooser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCharacter: 1,
      side: "light",
      destroyed: false,
    };
  }

  onCharacterSelect = (e) => {
    const charId = e.target.value;
    this.setState({ selectedCharacter: charId });
  };

  sideHandler = side => {
    this.setState({ side: side });
  };

  destructionHandler = () => {
    this.setState({ destroyed: true });
  };

  render() {
    let content = (
      <div className="container">
        <CharacterPicker
          onCharacterSelect={this.onCharacterSelect}
          selectedChar={this.state.selectedCharacter}
          side={this.state.side}
        />
        <Character
          selectedChar={this.state.selectedCharacter}
        />
        <SideChooser 
          sideHandler={this.sideHandler}
          destructionHandler={this.destructionHandler}
          side={this.state.side}
        />
      </div>
    );
    if(this.state.destroyed) {
      content = <h1>Total Destruction</h1>
    }
    return content
  }
}

export default App;
