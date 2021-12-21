import React from "react";
import { Range, getTrackBackground } from "react-range";


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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "1em",
      }}
    >
      <Range
        values={sliderValue}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={handleChange}
        renderTrack={({ props: trackProps, children }) => (
          <div
            onMouseDown={trackProps.onMouseDown}
            onTouchStart={trackProps.onTouchStart}
            style={{
              ...trackProps.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={trackProps.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: sliderValue,
                  colors: [`${color}`, "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props: thumbProps, isDragged }) => (
          <div
            {...thumbProps}
            style={{
              ...thumbProps.style,
              height: "22px",
              width: "22px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? `${color}` : "#CCC",
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: "5px" }} id="output">
        {value.toFixed(1)}
      </output>
    </div>
  );
};
