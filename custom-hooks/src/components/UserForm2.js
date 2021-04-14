import React from "react";
import useForm from "../hooks/useForm";

function UserForm2() {
  const [values, handleChange] = useForm({ email: "", password: "" });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <form action="">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default UserForm2;
