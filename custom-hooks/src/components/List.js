import React from "react";
import { useCountRender } from "../hooks/useCountRenders";

const List = React.memo(({ value, changeHandler }) => {
  useCountRender();
  return <button onClick={() => changeHandler(5)}>click me</button>;
});

export default List;
