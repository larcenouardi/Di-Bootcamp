import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
      operation: 'add'
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: Number(event.target.value)
    });
  }

  handleOperationChange = (event) => {
    this.setState({
      operation: event.target.value
    });
  }

  calculate = () => {
    let result;
    switch (this.state.operation) {
      case 'add':
        result = this.state.num1 + this.state.num2;
        break;
      case 'subtract':
        result = this.state.num1 - this.state.num2;
        break;
      case 'multiply':
        result = this.state.num1 * this.state.num2;
        break;
      case 'divide':
        result = this.state.num1 / this.state.num2;
        break;
      default:
        result = this.state.num1 + this.state.num2;
    }
    this.setState({ result });
  }

  render() {
    return (
      <div className="calculator-container">
        <h2>Calculator</h2>
        <div className="input-container">
          <input type="number" name="num1" onChange={this.handleInputChange} />
          <input type="number" name="num2" onChange={this.handleInputChange} />
        </div>
        <div className="select-container">
          <select name="operation" onChange={this.handleOperationChange}>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </div>
        <button className="calculate-button" onClick={this.calculate}>Calculate</button>
        <p className="result">Result: {this.state.result}</p>
      </div>
    );
  }
}

export default Calculator;
