import React from "react";
import Card from "../UI/Card";
import style from "./AddedUserList.module.css";
import Button from "../UI/Button";

const AddedUserList = (props) => {
  const handler = (e, clickedLiId) => {
    props.clickedLi(clickedLiId);
  };

  if (props.users.length === 0) {
    return;
  }

  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.key}>
              {user.username} ({user.age} years old)
              <Button onClick={(event) => handler(event, user.id)}>
                delete this user
              </Button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default AddedUserList;
