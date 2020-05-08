import React from "react";

const SideChooser = (props) => (
  <div className="margin-tb">
    <button
      type="button"
      className="btn btn-light"
      onClick={props.sideHandler.bind(this, "light")}
    >
      Light Side
    </button>

    <button
      type="button"
      className="btn btn-dark m-2"
      onClick={props.sideHandler.bind(this, "dark")}
    >
      Dark Side
    </button>
    {props.side === "dark" && (
      <button
        type="button"
        className="btn btn-danger m-2"
        onClick={props.destructionHandler.bind(this)}
      >
        DESTROY!
      </button>
    )}
  </div>
);

export default SideChooser;
