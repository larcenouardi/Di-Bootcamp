import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import "./Counter.css"; 

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <div className="counter-value">{count}</div>
      <div className="counter-buttons">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementAsync())}>Incrémenter Asynchrone</button>
        <button onClick={() => dispatch(incrementIfOdd())}>Incrémenter Si Impair</button>
      </div>
    </div>
  );
}
