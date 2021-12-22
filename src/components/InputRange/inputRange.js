import React from "react";
import { Range, getTrackBackground } from "react-range";
import styles from "./input.module.scss";

const STEP = 0.1;
const MIN = 0;
const MAX = 255;

export const InputRange = ({ value, color, onChange }) => {
  const handleChange = (rangeValue) => {
    const [v] = rangeValue;
    onChange(v);
  };
  const sliderValue = [value];

  return (
    <div className={styles.page} style={{}}>
      <Range
        values={sliderValue}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={handleChange}
        renderTrack={({ props: trackProps, children }) => (
          <div
            className={styles.size}
            onMouseDown={trackProps.onMouseDown}
            onTouchStart={trackProps.onTouchStart}
          >
            <div
              className={styles.background}
              ref={trackProps.ref}
              style={{
                background: getTrackBackground({
                  values: sliderValue,
                  colors: [`${color}`, "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props: thumbProps, isDragged }) => (
          <div className={styles.button} {...thumbProps}>
            <div
              className={styles.indicator}
              style={{
                backgroundColor: isDragged ? `${color}` : "#CCC",
              }}
            />
          </div>
        )}
      />
      <output className={styles.output}>{value.toFixed(1)}</output>
    </div>
  );
};
 