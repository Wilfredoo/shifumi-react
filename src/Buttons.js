import React from "react";
import "./App.css";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <button onClick={() => this.props.drawOrNot("Rock")}>Rock</button>
        <button onClick={() => this.props.drawOrNot("Paper")}>Paper</button>
        <button onClick={() => this.props.drawOrNot("Scissors")}>
          Scissors
        </button>
      </>
    );
  }
}

export default Buttons;
