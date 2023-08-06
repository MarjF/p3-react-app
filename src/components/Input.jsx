import React from "react";

const Mon = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        value={props.value}
      />
    </div>
  );
};

export default Input;
