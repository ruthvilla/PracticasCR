import React from "react";
import UserList from "./components/UserList";
import users from "./users.json";
const App = () => {
  return (
    <>
      <h1>Lista de Usuarios</h1>
      <UserList users={users} />
    </>
  );
};

export default App;
