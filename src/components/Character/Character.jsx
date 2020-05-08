import React from "react";
import "./Character.css";
import { characters } from "../../data/characters";

const Character = (props) => {
  const char = characters.find((char) => char.id == props.selectedChar);
  if (char) {
    return (
      <div className="summary">
        <h1>{char.name}</h1>
        <p>
          Gender: <span className="summary__output">{char.gender}</span>
        </p>
        <p>
          Height: <span className="summary__output">{char.height}</span>
        </p>
        <p>
          Hair Color / Skin Color:{" "}
          <span className="summary__output">{char.hairColor}</span>{" / "}
          <span className="summary__output">{char.skinColor}</span>
        </p>
        <p>
          Appears in # Movies:{" "}
          <span className="summary__output">{char.movieCount}</span>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Invalid Character</h1>
      </div>
    );
  }
};

export default Character;
