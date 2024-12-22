import React from "react";
import styles from "./QuoteForm.module.css";

export function FormTextArea({ id, label, required = false, ...props }) {
  return (
    <div className={styles.textareaColumn}>
      <label htmlFor={id} className={styles["visually-hidden"]}>
        {label}
      </label>
      <textarea
        id={id}
        className={styles.formTextarea}
        placeholder={label}
        aria-label={label}
        required={required}
        {...props}
      />
    </div>
  );
}
