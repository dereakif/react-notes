import React from "react";
import { useCountRender } from "../hooks/useCountRenders";

const Square = React.memo(({ number, changeHandler }) => {
  useCountRender();
  return <button onClick={() => changeHandler(number)}>{number}</button>;
});

export default Square;
