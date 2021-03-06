import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>New Item</label>
        <input
          style={{
            backgroundColor: !isValid ? "#fe8686" : "#fefddd",
            border: !isValid ? "1px solid red" : "1px solid black",
          }}
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
        <span style={{ visibility: !isValid ? "visible" : "hidden" }}>
          Please enter a valid item!
        </span>
      </div>
      <Button type="submit">Add Item</Button>
    </form>
  );
};

export default CourseInput;
