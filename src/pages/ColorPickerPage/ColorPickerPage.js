import React, { useState } from "react";
import { ColorPicker } from "../../components/ColorPicker/ColorPicker";
import { Buttons } from "../../components/Buttons";
import { InputRange } from "../../components/InputRange";
import "./styles.scss";

export const ColorPickerPage = () => {
  const [redValue, setRedValue] = useState(20);
  const [greenValue, setGreenValue] = useState(20);
  const [blueValue, setBlueValue] = useState(20);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("Click on square to start ");
  return (
    <div className="wrapper">
      <div className="colorpickerpage">
        <ColorPicker
          onSlidersBlockToggle={() => {
            setVisible(true);
          }}
          redValue={redValue}
          greenValue={greenValue}
          blueValue={blueValue}
        />
        {visible ? (
          <div className="sliders">
            <InputRange
              value={redValue}
              color={"#f23d40"}
              onChange={(value) => {
                setRedValue(value);
              }}
            />
            <InputRange
              value={greenValue}
              color={"#46f23d"}
              onChange={(value) => {
                setGreenValue(value);
              }}
            />
            <InputRange
              value={blueValue}
              color={"#1e56fc"}
              onChange={(value) => {
                setBlueValue(value);
              }}
            />
          </div>
        ) : (
          <h2>{message}</h2>
        )}

        <Buttons
          onSubmit={() => {
            setVisible(false);
            setMessage("");
          }}
          onCancel={() => {
            setRedValue(20);
            setGreenValue(20);
            setBlueValue(20);
            setVisible(false);
            setMessage("");
          }}
        />
      </div>
    </div>
  );
};
