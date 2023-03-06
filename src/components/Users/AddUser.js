import React, { useState } from "react";

import Card from "../UI/Card";
import style from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      props.onError(
        true,
        "Please enter a valid name and age (non-empty values).",
        "Empty inputs!"
      );
      return;
    }
    if (age && +age < 18 && age >= 0) {
      props.onError(
        true,
        "Please enter a valid age (not below 18)",
        "Invalid age!"
      );
      return;
    }
    if (age && +age < 0) {
      props.onError(
        true,
        "Please enter a valid age (not negative years)",
        "Invalid age!"
      );
      return;
    }
    if (age && +age > 118) {
      props.onError(true, "Please enter a valid age (too old)", "Invalid age!");
      return;
    }
    props.onDataSubmited({
      username: username,
      age: age,
      id: `id${Math.random()}`,
    });
    setAge("");
    setUsername("");
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
