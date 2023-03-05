import React from "react";
import Card from "../UI/Card";
import style from "./AddedUserList.module.css";

const AddedUserList = (props) => {
  return props.users.map((user) => {
    return (
      <Card key={user.key} className={style.users}>
        <ul>
          <li>Name: {user.username}</li>
          <li>Age: {user.age}</li>
        </ul>
      </Card>
    );
  });
};
export default AddedUserList;
