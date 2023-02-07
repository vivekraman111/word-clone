import React from "react";
import Banner from "../Banner";

function WonBanner({ numGuesses, handleRestart }) {
  return (
    <Banner
      type="happy"
      action={handleRestart}
      actionText="Restart game"
    >
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{`${numGuesses} guess${numGuesses > 1 ? "es" : ""}`}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
