import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.link}>
        <h1>Color Picker</h1>
      </Link>
    </header>
  );
};
