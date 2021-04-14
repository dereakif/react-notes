import { useState } from "react";

function useCounter() {
  const [value, setValue] = useState(0);
  const decrement = {
    value,
    onClick: () => {
      setValue(value - 1);
    },
  };
  const increment = {
    value,
    onClick: () => {
      setValue(value + 1);
    },
  };
  return [value, decrement, increment];
}

export default useCounter;
