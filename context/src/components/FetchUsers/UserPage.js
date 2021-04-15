import React, { useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext";

function UserPage() {
  const users = useContext(UsersContext);
  console.log(users);
  return (
    <div>
      {users.length > 0 &&
        users.map((user, i) => <div key={i}>Phone: {user.phone}</div>)}
    </div>
  );
}

export default UserPage;
