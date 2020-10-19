import React, { useState } from "react";
import "./App.css";

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draw, setDraw] = useState(false);
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
      <button onClick={() => drawOrNot("Rock")}>Rock</button>
      <button onClick={() => drawOrNot("Paper")}>Paper</button>
      <button onClick={() => drawOrNot("Scissors")}>Scissors</button>
      <p>Player Score: {playerScore}</p>
      <p>Computer Score: {computerScore}</p>
      {draw && <p>It's a draw</p>}
    </div>
  );
}

export default App;
