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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      decimal: false,
      operator: false
    }
  }

  clear = () => {
    console.log("clear");
    this.setState({
      display: 0,
      decimal: false,
      operator: false
    });
  };

concatNumber = (number) => {
  if (this.state.display === 0 && number === "0") {
    return;
  }
  if (number !== "." && this.state.display === 0) {
    this.setState({
      display: number,
      operator: false
    });
  } else if (number !== "." && number !== 0) {
    this.setState({
      display: this.state.display + number,
      operator: false
    });
  }

    else if (number === "." && this.state.decimal === true) {
      return;
  } else { this.setState({
    operator: false,
    decimal: true,
    display: this.state.display + number
  })
}
  console.log(this.state.display + number);
};

concatOperator = (operator) => {
  if (this.state.operator === true && operator !== "-") {
    this.setState({
      display: this.state.display.substring(0, this.state.display.length -1) + operator
    })
    console.log("cannot have consecutive operators");
  } else if (operator === "-") {
    this.setState({
      display: this.state.display + operator,
      operator: false,
      decimal: false
    })
  } else {
    this.setState({
      display: this.state.display + operator,
      decimal: false,
      operator: true
    });
  }
};


evaluate = () => {
  if (this.state.operator === true) {
    return console.log("cannot end input with an operator");
  } else {
    this.setState({display: math.evaluate(this.state.display)});
  }
};
  render() {
    return (
      <div className="App">
        <Display
          display={this.state.display}

        />
        <div className="button-container">
          <div className="num-container">
            <NumButtons handleClick={this.concatNumber}/>
          </div>
          <div className="op-container">
            <OperatorButtons handleClick={this.concatOperator}/>
          </div>
          <EvalButton handleEvaluate={this.evaluate}>=</EvalButton>
          <ClearButton handleClear={this.clear}>Clear</ClearButton>
        </div>
      </div>
    );
  }
  }


export default App;
