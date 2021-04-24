import React, { useCallback, useState } from "react";
import List from "./List";
import Square from "./Square";

function Input5() {
  const [value, setValue] = useState(0);
  const favnumbers = [1, 2, 3];
  const changeHandler = useCallback(
    (n) => {
      setValue((c) => c + n);
    },
    [setValue]
  );
  return (
    <div>
      <div>{value}</div>
      <List changeHandler={changeHandler} />
      {favnumbers.map((number) => (
        <Square key={number} number={number} changeHandler={changeHandler} />
      ))}
    </div>
  );
}

export default Input5;
