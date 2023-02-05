import React from "react";

function Banner({ type, numGuesses, answer, handleRestart }) {
  return (
    <div className={`${type} banner`}>
      <div className="spacer"></div>
      <p>
        {type === "happy" ? (
          <>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{`${numGuesses} guesses`}</strong>.
          </>
        ) : (
          <>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </>
        )}
      </p>
      <div className="spacer right">
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}

export default Banner;
