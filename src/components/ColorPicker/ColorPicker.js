import React from "react";
import styles from "./colorPicker.module.scss";

export const ColorPicker = (props) => {
  const pickerColors = {
    background: `rgb(${props.redValue} ${props.greenValue} ${props.blueValue})`,
  };
  return (
    <div
      onClick={() => {
        props.onSlidersBlockToggle();
      }}
      style={pickerColors}
      className={styles.colorpicker}
    ></div>
  );
};
