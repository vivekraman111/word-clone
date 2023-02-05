import React from "react";

function Guesser({ handleNewGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          if (guess.length === 5 && handleNewGuess(guess)) {
            console.info({ guess });
            setGuess("");
          }
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          type="text"
          id="guess-input"
          value={guess}
          disabled={disabled}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default Guesser;
