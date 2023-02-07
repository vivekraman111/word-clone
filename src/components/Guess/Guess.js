import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guessStr, answer }) {
  let guessCharStatus = checkGuess(guessStr, answer);

  return (
    <p className="guess">
      {range(5).map((i) => (
        <span
          key={i}
          className={`cell ${guessCharStatus ? guessCharStatus[i].status : ""}`}
        >
          {guessStr[i]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
