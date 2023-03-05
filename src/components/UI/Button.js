import React from "react";
import btn from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={btn.btn}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
