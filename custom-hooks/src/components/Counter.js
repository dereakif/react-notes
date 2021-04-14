import React from "react";
import useCounter from "../hooks/useCounter";

function Counter() {
  const [count, decrement, increment] = useCounter();
  return (
    <div className="counterContainer">
      <div>{count}</div>
      <button {...decrement}>-</button>
      <button {...increment}>+</button>
    </div>
  );
}

export default Counter;
