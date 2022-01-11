import React from "react";
import { Link } from "react-router-dom";
import styles from "./homePage.module.scss";
import GitLogo from "../../assets/img/GitIco.png";
import PickerLogo from "../../assets/img/ColorPicker.png";

export const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a
              href="https://github.com/ArthurPPPPP/color_picker"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitLogo} alt="Git Logo" id={styles.gitLogo} />
            </a>
            <p>Link to Git repository with this App.</p>
          </li>
          <li>
            <Link to={"/colorpicker"}>
              <img src={PickerLogo} alt="Git Logo" id={styles.pickerLogo} />
            </Link>
            <p>Color Picker</p>
          </li>
        </ul>
      </nav>
    </main>
  );
};
