import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";
import { checkGuess } from "../../game-helpers";
import { WORDS } from "../../data";

function GuessResults({ previousGuesses, answer }) {
  let cheatOptions =
    previousGuesses.length > 0 &&
    previousGuesses[previousGuesses.length - 1] !== answer
      ? getCheatOptions(previousGuesses, answer)
      : [];

  function getCheatOptions(previousGuesses, answer) {
    return previousGuesses.reduce((cheatWords, pg) => {
      let guessCharStatus = checkGuess(pg, answer);
      return cheatWords.filter((word) => {
        return guessCharStatus.every(({ letter, status }, guessCharPos) => {
          if (status === "incorrect") {
            return word.indexOf(letter) === -1;
          } else if (status === "misplaced") {
            return word.indexOf(letter) > -1 && word[guessCharPos] !== letter;
          } else if (status === "correct") {
            return word[guessCharPos] === letter;
          }
        });
      });
    }, WORDS);
  }

  return (
    <div className="guess-results">
      <div className="cheat">
        {cheatOptions.map((cheatWord, i) => (
          <div key={i}>{cheatWord}</div>
        ))}
      </div>
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess key={i} guessStr={previousGuesses[i] || ""} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
