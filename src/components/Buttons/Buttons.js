import React from "react";
import "./styles.scss";

export const Buttons = ({ onCancel, onSubmit, disabled }) => {
  return (
    <div className="buttons">
      <button
        disabled={disabled}
        onClick={() => {
          onCancel();
        }}
        className="cancel"
      >
        Cancel
      </button>
      <button
        disabled={disabled}
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
