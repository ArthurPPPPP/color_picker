import React from "react";
import "./styles.scss";

export const Buttons = ({ onCancel, onSubmit }) => {
  return (
    <div className="buttons">
      <button
        style={{ backgroundColor: "#44014C" }}
        onClick={() => {
          onCancel();
        }}
        className="cancel"
      >
        Cancel
      </button>
      <button
        className="submit"
        onClick={() => {
          onSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};
