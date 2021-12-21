import React from "react";
import styles from "./colorPicker.module.scss";

export const ColorPicker = (props) => {
  const pickerStyle = {
    backgroundColor: `rgb(${props.redValue} ${props.greenValue} ${props.blueValue})`,
  };
  return (
    <div
      onClick={() => {
        props.onSlidersBlockToggle();
      }}
      style={pickerStyle}
      className={styles.colorpicker}
    ></div>
  );
};
