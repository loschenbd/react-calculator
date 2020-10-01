import React from "react";

const opValues = [
  { id: "add", value: "+" },
  { id: "subtract", value: "-" },
  { id: "multiply", value: "*" },
  { id: "divide", value: "/" },
];

const OperatorButtons = (props) => opValues.map((button) => {
  return (
    <button
      className="op-button"
      id={button.id}
      key={button.id}
      onClick={() => props.handleClick(button.value)}>

      {button.value}
    </button>
  )
})

export default OperatorButtons