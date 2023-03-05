import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import AddedUserList from "./components/Users/AddedUserList";

function App() {
  const [users, setUsers] = useState([]);

  const inputDataHandler = (data) => {
    const inputData = { ...data, key: data.id };
    setUsers((prev) => [inputData, ...prev]);
    console.log(`APP: ${inputData.username}`, inputData);
  };

  return (
    <div>
      <AddUser onDataSubmited={inputDataHandler} />
      <AddedUserList users={users} />
    </div>
  );
}

export default App;
