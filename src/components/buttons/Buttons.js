import React from 'react';

const numValues = [
  { id: "seven", value: "7" },
  { id: "eight", value: "8" },
  { id: "nine", value: "9" },
  { id: "four", value: "4" },
  { id: "five", value: "5" },
  { id: "six", value: "6" },
  { id: "one", value: "1" },
  { id: "two", value: "2" },
  { id: "three", value: "3" },
  { id: "zero", value: "0" },
  { id: "decimal", value: "." },
];

  const Buttons = (props) => numValues.map((button) => {
    return  (
      <button
        className="calc-button"
        id={button.id}
        key={button.id}
        onClick={() => props.handleClick(button.value)}>
        {button.value}

      </button>
    )
  })


export default Buttons;