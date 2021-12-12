import React, { useState, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 255;

export const Slider = (propsValue) => {
  const [sliderValue, setSliderValues] = useState([20]);
  useEffect(() => {
    propsValue.setColor(sliderValue);
  }, [sliderValue]);

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
        onChange={(values) => setSliderValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={(props.onMouseDown, console.log(props))}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: sliderValue,
                  colors: [`${propsValue.color}`, "#ccc"],
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
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
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
                backgroundColor: isDragged ? `${propsValue.color}` : "#CCC",
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: "5px" }} id="output">
        {sliderValue[0].toFixed(1)}
      </output>
    </div>
  );
};
