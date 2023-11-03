import React, { useState } from "react";

import styles from "./Form.module.css";

const Form = ({ onSubmit }) => {
  const initialValues = {
    "current-savings": "10000",
    "yearly-contribution": "1200",
    "expected-return": "5",
    duration: "15",
  };

  const [formData, setFormData] = useState(initialValues);

  const changeHandler = (input, value) => {
    console.log(input, value);

    setFormData((prevInput) => {
      return { ...prevInput, [input]: +value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit(formData);
  };

  const resetHandler = (e) => {
    setFormData(initialValues);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) => {
              changeHandler("current-savings", e.target.value);
            }}
            value={formData["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) => {
              changeHandler("yearly-contribution", e.target.value);
            }}
            value={formData["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) => {
              changeHandler("expected-return", e.target.value);
            }}
            value={formData["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => {
              changeHandler("duration", e.target.value);
            }}
            value={formData["duration"]}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default Form;
