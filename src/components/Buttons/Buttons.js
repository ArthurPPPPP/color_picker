import React from "react";
import styles from "./button.module.scss";

export const Buttons = ({ onCancel, onSubmit, disabled }) => {
  return (
    <div className={styles.buttons}>
      <button
        disabled={disabled}
        onClick={() => {
          onCancel();
        }}
        className={styles.cancel}
      >
        Cancel
      </button>
      <button
        disabled={disabled}
        className={styles.submit}
        onClick={() => {
          onSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};
