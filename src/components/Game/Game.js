import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guesser from "../Guesser";
import GuessResults from "../GuessResults";
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import Keyboard from "../Keyboard"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
//const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
//console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS))
  const [previousGuesses, setPreviousGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("in-progress");

  console.info({ answer })

  function handleNewGuess(newGuess) {
    if (newGuess === answer) {
      setGameStatus("win");
    } else if (previousGuesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus("loss");
    }

    if (previousGuesses.length < NUM_OF_GUESSES_ALLOWED) {
      setPreviousGuesses([...previousGuesses, newGuess]);
      return true;
    }
    return false;
  }

  function handleRestart() {
    setAnswer(sample(WORDS))
    setPreviousGuesses([])
    setGameStatus("in-progress")
  }

  return (
    <div className="game-wrapper">
      <GuessResults previousGuesses={previousGuesses} answer={answer} />
      <Guesser
        handleNewGuess={handleNewGuess}
        disabled={!(gameStatus === "in-progress")}
      />
      <Keyboard previousGuesses={previousGuesses} answer={answer} />
      {(gameStatus === "win") && (
        <WonBanner
          numGuesses={previousGuesses.length}
          handleRestart={handleRestart}
        />
      )}
      {(gameStatus === "loss") && (
        <LostBanner
          answer={answer}
          handleRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default Game;
