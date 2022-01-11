import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames/bind";

export const Button = ({ className, disable, children, onClick }) => {
  const buttonStyles = classNames.bind(styles);
  const buttonClasses = buttonStyles(className);
  return (
    <button disabled={disable} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
