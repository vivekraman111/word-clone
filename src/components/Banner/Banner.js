import React, { Children } from "react";

function Banner({ type, action, actionText, children }) {
  return (
    <div className={`${type} banner`}>
      {children}
      {action && <button onClick={action}>{actionText}</button>}
    </div>
  );
}

export default Banner;
