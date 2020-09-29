import React, {Component} from 'react';
import './App.css';
import * as math from 'mathjs';

import Buttons from "./components/buttons/Buttons"
import ClearButton from "./components/buttons/ClearButton"
import EvalButton from "./components/buttons/EvalButton"
import Operators from "./components/buttons/Operators"
import Display from "./components/display/Display"



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "0"
    }
  }

  concatInput = val => {
    this.setState({input: this.state.input + val});
  };

  render() {
    return (
      <div className="App">
        <Display input={this.state.input}/>
        <Buttons handleClick={this.concatInput}/>
        <Operators handleClick={this.concatInput}/>
        <EvalButton handleEval={() => this.setState({input: math.evaluate(this.state.input)})}>=</EvalButton>
        <ClearButton handleClear={() => this.setState({input: 0})}>Clear</ClearButton>

      </div>
    );
  }
  }


export default App;
