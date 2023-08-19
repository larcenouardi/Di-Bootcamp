import React, { Component } from 'react';
import Child from './Child'; 
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  handleDeleteClick = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        {this.state.show && <Child />}
        <button onClick={this.handleDeleteClick}>Delete</button>
      </div>
    );
  }
}

export default App;
