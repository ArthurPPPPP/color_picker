import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="header">
      <Link to={"/"} className="link">
        <h1>Color Picker</h1>
      </Link>
    </header>
  );
};
