import React from "react";
import "./App.css";

class Scores extends React.Component {
  constructor(props) {
    super(props);
  }
  // const { playerScore, computerScore, draw } = props;
  render() {
    return (
      <>
        <p>Player Score: {this.props.playerScore}</p>
        <p>Computer Score: {this.props.computerScore}</p>
        {this.props.draw && <p>It's a draw</p>}
      </>
    );
  }
}

export default Scores;
