import React from "react";
import UsersList from "./UsersList";
import { UsersProvider } from "../../contexts/UsersContext";
import UserPage from "./UserPage";
function FetchUsers() {
  return (
    <div>
      <UsersProvider>
        <UsersList />
        <UserPage />
      </UsersProvider>
    </div>
  );
}

export default FetchUsers;
