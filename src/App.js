import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import AddedUserList from "./components/Users/AddedUserList";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [errorTitle, setTitle] = useState("");
  const [errorMessage, setMessage] = useState("");

  const deleteLi = (liId) => {
    setUsers(users.filter((user) => user.id !== liId));
  };

  const errorHandler = (isError, message, title) => {
    if (isError) {
      setError(true);
      setTitle(title);
      setMessage(message);
    }
  };

  const clickHandler = (e) => {
    setError(false);
  };

  const inputDataHandler = (data) => {
    const inputData = { ...data, key: data.id };
    setUsers((prev) => [inputData, ...prev]);
    console.log(`APP: ${inputData.username}`, inputData);
  };

  return (
    <div>
      <AddUser onError={errorHandler} onDataSubmited={inputDataHandler} />
      <AddedUserList clickedLi={deleteLi} users={users} />
      {error ? (
        <ErrorModal
          onClick={clickHandler}
          message={errorMessage}
          title={errorTitle}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
