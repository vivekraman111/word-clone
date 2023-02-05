import React from "react";
import { checkGuess } from "../../game-helpers";

const keys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"].map((rowStr) =>
  rowStr.split("")
);

function Keyboard({ previousGuesses, answer }) {

  let keyboardIdx = previousGuesses.reduce((keyIdx, pg) => {
    let guessIdx = checkGuess(pg, answer).reduce((gIdx, { letter, status }) => {
      gIdx[letter] = status;
      return gIdx;
    }, Object.create(null));
    return { ...keyIdx, ...guessIdx };
  }, Object.create(null));
  
  return (
    <div className="keyboard-wrapper">
      {keys.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((key, j) => (
            <div key={j} className={`keyboard-key ${keyboardIdx[key] || ""}`}>
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
