import React from "react";
import "./App.css";

function Buttons(props) {
    // const {drawOrNot} = props;
  return (
    <>
      <button onClick={() => drawOrNot("Rock")}>Rock</button>
      <button onClick={() => drawOrNot("Paper")}>Paper</button>
      <button onClick={() => drawOrNot("Scissors")}>Scissors</button>
    </>
  );
}

export default Buttons;
