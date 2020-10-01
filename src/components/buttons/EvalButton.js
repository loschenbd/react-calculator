import React from 'react';

const EvalButton = (props) => {
  return (
    <div>
      <button
        onClick={props.handleEvaluate}
        id="equals">
        {props.children}
      </button>
    </div>
  );
};

export default EvalButton;
