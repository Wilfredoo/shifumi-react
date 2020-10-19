import React, { useState } from "react";
import Buttons from "./Buttons"
import Scores from "./Scores"
import "./App.css";

function GameLogic() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draw, setDraw] = useState(0);
  const elements = ["Rock", "Paper", "Scissors"];

  const generateComputerChoice = () => {
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    return randomElement;
  };

  const drawOrNot = (myChoice) => {
    const computerChoice = generateComputerChoice();
    computerChoice === myChoice
      ? setDraw(true)
      : winOrLose(myChoice, computerChoice);
  };

  const winOrLose = (myChoice, computerChoice) => {
    setDraw(false);
    (myChoice === "Scissors" && computerChoice === "Paper") ||
    (myChoice === "Paper" && computerChoice === "Rock") ||
    (myChoice === "Rock" && computerChoice === "Scissors")
      ? setPlayerScore((playerScore) => playerScore + 1)
      : setComputerScore((computerScore) => computerScore + 1);
  };

  return (
    <div className="App">
      <Buttons drawOrNot={drawOrNot}/>
      <Scores playerScore={playerScore} computerScore={computerScore} draw={draw}/>
    </div>
  );
}

export default GameLogic;
