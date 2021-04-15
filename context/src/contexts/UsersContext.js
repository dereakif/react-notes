import React, { createContext, useEffect, useState } from "react";
export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  let url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);
  return (
    <div>
      <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
    </div>
  );
};
