import React, { useEffect, useState } from "react";
import { ColorPicker } from "../ColorPicker/ColorPicker";

import { Buttons } from "../Buttons";
import { Slider } from "../InputRange/inputRange";

import "./styles.css";

export const ColorPickerPage = () => {
  const [redValue, setRedValue] = useState(50);
  const [greenValue, setGreenValue] = useState(50);
  const [blueValue, setBlueValue] = useState(50);

  const onChangeRed = (value) => {
    setRedValue(value[0]);
  };
  const onChangeGreen = (value) => {
    setGreenValue(value[0]);
  };
  const onChangeBlue = (value) => {
    setBlueValue(value[0]);
  };

  return (
    <div className="colorpickerpage">
      <ColorPicker
        redValue={redValue}
        greenValue={greenValue}
        blueValue={blueValue}
      />
      <div className="sliders">
        <Slider color={"#f23d40"} setColor={onChangeRed} />
        <Slider color={"#46f23d"} setColor={onChangeGreen} />
        <Slider color={"#1e56fc"} setColor={onChangeBlue} />
      </div>
      <Buttons />
    </div>
  );
};
