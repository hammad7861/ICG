import React from "react";
import styles from "./QuoteForm.module.css";

export function FormInput({
  id,
  label,
  type = "text",
  required = false,
  ...props
}) {
  return (
    <>
      <label htmlFor={id} className={styles["visually-hidden"]}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={styles.formInput}
        placeholder={label}
        aria-label={label}
        required={required}
        {...props}
      />
    </>
  );
}
