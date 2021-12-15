import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import GitLogo from "../../images/GitIco.png";
import PickerLogo from "../../images/ColorPicker.png";

export const HomePage = () => {
  return (
    <main className="homePage">
      <nav className="navigation">
        <ul>
          <li>
            <a
              href="https://github.com/ArthurPPPPP/color_picker"
              target="_blank"
            >
              <img src={GitLogo} alt="GitLogo" id="gitLogo" />
            </a>
            <p>Link to Git repository with this App.</p>
          </li>
          <li>
            <Link to={"/colorpicker"}>
              <img src={PickerLogo} id="pickerLogo" />
            </Link>
            <p>Color Picker</p>
          </li>
        </ul>
      </nav>
    </main>
  );
};
