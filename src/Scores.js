import React from "react";
import "./App.css";

function Scores(props) {
  const { playerScore, computerScore, draw } = props;
  return (
    <>
      <p>Player Score: {playerScore}</p>
      <p>Computer Score: {computerScore}</p>
      {draw && <p>It's a draw</p>}
    </>
  );
}

export default Scores;
