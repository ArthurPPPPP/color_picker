import React from "react";
import "./styles.css";

export const ColorPicker = (props) => {
  const styles = {
    background: `rgb(${props.redValue} ${props.greenValue} ${props.blueValue})`,
  };
  return <div style={styles} className="colorpicker"></div>;
};
