import React, { useState } from "react";
import { ColorPicker } from "../../components/ColorPicker/ColorPicker";
import { Buttons } from "../../components/Buttons";
import { InputRange } from "../../components/InputRange";

import "./styles.scss";

export const ColorPickerPage = () => {
  const [redValue, setRedValue] = useState(205);
  const [greenValue, setGreenValue] = useState(205);
  const [blueValue, setBlueValue] = useState(205);
  const [visible, setVisible] = useState(false);
  const [disable, setDisable] = useState(true);
  const [message, setMessage] = useState("Click on square to start ");
  return (
    <main className="wrapper">
      <div className="colorpickerpage">
        <ColorPicker
          onSlidersBlockToggle={() => {
            setVisible(true);
            setDisable(false);
          }}
          redValue={redValue}
          greenValue={greenValue}
          blueValue={blueValue}
        />
        {visible ? (
          <div className={`sliders`}>
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
          <h3>{message}</h3>
        )}

        <Buttons
          onSubmit={() => {
            setVisible(false);
            setMessage(`Color: rgb(${redValue}, ${greenValue}, ${blueValue})`);
          }}
          onCancel={() => {
            setRedValue(205);
            setGreenValue(205);
            setBlueValue(205);
            setVisible(false);
            setMessage("");
          }}
          disabled={disable}
        />
      </div>
    </main>
  );
};
