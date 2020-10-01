import React, {Component} from 'react';
import './App.css';
import './components/display/display.css'
import './components/buttons/buttons.css'
import * as math from 'mathjs';

import NumButtons from "./components/buttons/numButtons"
import ClearButton from "./components/buttons/ClearButton"
import EvalButton from "./components/buttons/EvalButton"
import OperatorButtons from "./components/buttons/OperatorButtons"
import Display from "./components/display/Display"





// Make it so a number cannot begin with multiple zeros.
// Make it so two decimals cannot be added to the input.
// Make it so 2 or more operators cannot be added consecutively



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNumber: "0",
      prevNumber: "0",
      display: "0",
      operation: undefined
    }
  }

  clear = () => {
    console.log("clear");
    this.setState({
      currentNumber: "0",
      prevNumber: "0",
      display: "0",
      operation: undefined
    });
  };

  concatNumber = number => {
    let newNumber = this.state.currentNumber.toString();
    if(number === '.' && newNumber.includes('.')) return;
    this.setState({ currentNumber: newNumber + number.toString()});
  };

  useOperator = (operator) => {
    this.setState({ operation: operator});
    if (this.state.currentNumber === "0") {return this.setState({ currentNumber: "input a number"})}
    if (this.state.prevNumber !== "0") {
      this.setState({ currentNumber: this.state.prevNumber});
      this.evaluate()
    }
    this.setState({ currentNumber: this.state.prevNumber});
    this.setState({ prevNumber: this.state.currentNumber + operator});
  };

  evaluate = () => {
    let prev = parseFloat(this.state.prevNumber);
    let current = parseFloat(this.state.currentNumber);
    switch (this.state.operation) {
      case "+":
        this.setState({ currentNumber: current + prev});
        break
      case "-":
        this.setState({ currentNumber: current - prev});
        break
      case "*":
        this.setState({ currentNumber: current * prev});
        break
      case "/":
        this.setState({ currentNumber: current / prev});
        break
      default:
        return
    }
  };
    /* if (val does not start with multiple zeros) {
  set state to button value;
  } else if (val has one decimal{
    Do not allow the adding of another decimal;
  } else if (val previous input was an operator) {
    Do not all the adding of an operator
  */




  //   if (this.state.input !== "0") {
  //     this.setState({input: this.state.input + val})
  //   } else if (val === "." && this.state.input.includes(".")) {
  //     return console.log("already have a decimal")
  //   } else {
  //     this.setState({
  //       input: this.state.input + val
  //     })
  //   }
  // };

  render() {
    return (
      <div className="App">
        <Display
          currentNumber={this.state.currentNumber}
          prevNumber={this.state.prevNumber}
        />
        <div className="button-container">
        <div className="num-container">
        <NumButtons handleClick={this.concatNumber}/>
        </div>
        <div className="op-container">
        <OperatorButtons handleClick={this.useOperator}/>
        </div>
        <EvalButton handleEvaluate={this.evaluate}>=</EvalButton>
        <ClearButton handleClear={this.clear}>Clear</ClearButton>
        </div>

      </div>
    );
  }
  }


export default App;
