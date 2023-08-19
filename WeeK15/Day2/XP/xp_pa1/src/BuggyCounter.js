import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));

    if (this.state.counter === 4) {
      throw new Error('I crashed!');
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        Counter: {this.state.counter}
      </div>
    );
  }
}

export default BuggyCounter;
