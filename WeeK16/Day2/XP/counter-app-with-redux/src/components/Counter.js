import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../actions';

class Counter extends Component {
  render() {
    return (
      <div className="counter-container">
        <div className="counter-value">{this.props.count}</div>
        <div className="counter-buttons">
          <div className="counter-button" onClick={this.props.decreaseCount}>-</div>
          <div className="counter-button" onClick={this.props.increaseCount}>+</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

const mapDispatchToProps = {
  increaseCount,
  decreaseCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
