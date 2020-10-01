import React from 'react';

const Display = (props) => {
  return (
    <div id="display">
      <span className="prev-number">{props.prevNumber}</span>
      <span className="current-number">{props.currentNumber}</span>
    </div>
  );
};

export default Display;
