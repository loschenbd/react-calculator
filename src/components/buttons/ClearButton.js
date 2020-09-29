import React from "react";

const ClearButton = (props) => {
  return (
  <button
    onClick={props.handleClear}
    id="clear">
    {props.children}
  </button>
  )
};

export default ClearButton