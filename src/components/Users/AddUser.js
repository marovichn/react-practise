import React, { useState } from "react";

import Card from "../UI/Card";
import style from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (Number(age) > 0 && username !== "" && age.trim().length !== "") {
      console.log(`DataAdd: ${age} ${username}`);
      props.onDataSubmited({
        username: username,
        age: age,
        id: `id${Math.random()}`,
      });
      setAge("");
      setUsername("");
    } else {
      props.onError(true);
    }
  };

  const inputValueUsername = (ev) => {
    setUsername(ev.target.value);
  };

  const inputValueAge = (ev) => {
    setAge(ev.target.value);
  };

  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={inputValueUsername}
          id="username"
          type="text"
        ></input>
        <label htmlFor="age">Age</label>
        <input
          value={age}
          onChange={inputValueAge}
          id="age"
          type="number"
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
