import React from "react";
import Card from "../UI/Card";
import style from "./AddedUserList.module.css";

const AddedUserList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.key}>
              {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default AddedUserList;
