import React, { useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext";

function UsersList() {
  const users = useContext(UsersContext);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {users.map((user, i) => (
        <div
          key={i}
          style={{
            border: "1px solid black",
            margin: "1rem",
            width: "250px",
            padding: "10px",
          }}
        >
          <div>
            Name: <span>{user.name}</span>
          </div>
          <div>
            Username: <span>{user.username}</span>
          </div>
          <div>
            Email: <span>{user.email}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
