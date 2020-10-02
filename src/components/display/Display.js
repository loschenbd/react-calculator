import React from 'react';

const Display = (props) => {
  return (
    <div>
      <span id="display" className="current-number">{props.display}</span>
      <span className="prev-number">{props.prevNumber}</span>
      <span className="current-number">{props.currentNumber}</span>
      <span className="stack">{props.stack}</span>
    </div>
  );
};

export default Display;
