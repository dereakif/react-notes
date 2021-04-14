import { useState } from "react";

function useForm(initialState) {
  const [values, setValues] = useState(initialState);
  return [
    values,
    (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
  ];
}

export default useForm;
