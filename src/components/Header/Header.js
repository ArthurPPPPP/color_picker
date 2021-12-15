import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
export const Header = () => {
  const styles = {
    background: `rgb(255, 255, 255)`,
    background: `linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 32%,
    rgba(205, 205, 205, 1) 120%
  )`,
  };
  return (
    <header className="header" style={styles}>
      <Link to={"/"} className="link">
        <h1>Color Picker</h1>
      </Link>
    </header>
  );
};
