import React from "react";
import UsersList from "./UsersList";
import { UsersProvider } from "../../contexts/UsersContext";
function FetchUsers() {
  return (
    <div>
      <UsersProvider>
        <UsersList />
      </UsersProvider>
    </div>
  );
}

export default FetchUsers;
