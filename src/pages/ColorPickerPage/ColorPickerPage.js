import React, { useState } from "react";
import { ColorPicker } from "../../components/ColorPicker/ColorPicker";
import { Button } from "../../components/Button/Button";
import { InputRange } from "../../components/InputRange";
import styles from "./colorPickerPage.module.scss";

const defaultValue = 205;
export const ColorPickerPage = () => {
  const [redValue, setRedValue] = useState(defaultValue);
  const [greenValue, setGreenValue] = useState(defaultValue);
  const [blueValue, setBlueValue] = useState(defaultValue);
  const [visible, setVisible] = useState(false);

  const message = `Color : rgb(${redValue}, ${greenValue}, ${blueValue})`;

  const onCancel = () => {
    setRedValue(defaultValue);
    setGreenValue(defaultValue);
    setBlueValue(defaultValue);
    setVisible(false);
  };
  return (
    <main className={styles.wrapper}>
      <div className={styles.colorpickerpage}>
        <ColorPicker
          onSlidersBlockToggle={() => {
            setVisible(true);
          }}
          redValue={redValue}
          greenValue={greenValue}
          blueValue={blueValue}
        />
        {visible ? (
          <div className={styles.sliders}>
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

        <div className={styles.buttons}>
          <Button className={"cancel"} disable={!visible} onClick={onCancel}>
            Cancel
          </Button>
          <Button
            className={"submit"}
            disable={!visible}
            onClick={() => setVisible(false)}
          >
            Submit
          </Button>
        </div>
      </div>
    </main>
  );
};
