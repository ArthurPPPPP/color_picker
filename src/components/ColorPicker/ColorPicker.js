import React from "react";
import "./styles.scss";

export const ColorPicker = (props) => {
  console.log(props);
  const styles = {
    background: `rgb(${props.redValue} ${props.greenValue} ${props.blueValue})`,
  };
  return (
    <div
      onClick={() => {
        props.onSlidersBlockToggle();
      }}
      style={styles}
      className="colorpicker"
    ></div>
  );
};
