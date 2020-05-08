import React from 'react';

const SideChooser = (props) => (
  <div className="">
    <button onClick={props.sideHandler.bind(this, 'light')}>Light Side</button>
    <button onClick={props.sideHandler.bind(this, 'dark')}>Dark Side</button>
    {props.side === "dark" && (
      <button onClick={props.destructionHandler.bind(this)}>DESTROY!</button>
    )}
  </div>
);

export default SideChooser;
