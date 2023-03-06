import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import AddedUserList from "./components/Users/AddedUserList";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const errorTitle = "An error occured!";
  const errorMessage = "Somethong went wrong! Check your inputs.";

  const deleteLi = (liId) => {
    setUsers(users.filter((user) => user.id !== liId));
  };

  const errorHandler = (isError) => {
    if (isError) {
      setError(true);
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
