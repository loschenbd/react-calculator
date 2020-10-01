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
      prevNumber: undefined,
      display: "0",
      operation: undefined
    }
  }

  clear = () => {
    console.log("clear");
    this.setState({
      currentNumber: "0",
      prevNumber: undefined,
      display: "0",
      operation: undefined
    });
  };

  concatNumber = number => {
    let newNumber = this.state.currentNumber.toString();
    if(number === '.' && this.state.currentNumber.includes('.')) return;
    this.setState({ currentNumber: newNumber + number.toString()});
    console.log(number);
  }

  useOperator = (operator) => {
  console.log("Use Operator " + operator)
  }

  evaluate = () => {
    console.log("perform evaluation")
  }
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
        <Display input={this.state.currentNumber}/>
        <div className="button-container">
        <div className="num-container">
        <NumButtons handleClick={this.concatNumber}/>
        </div>
        <div className="op-container">
        <OperatorButtons handleClick={this.useOperator}/>
        </div>
        <EvalButton handleEval={() => this.setState({input: math.evaluate(this.state.input)})}>=</EvalButton>
        <ClearButton handleClear={this.clear}>Clear</ClearButton>
        </div>

      </div>
    );
  }
  }


export default App;
