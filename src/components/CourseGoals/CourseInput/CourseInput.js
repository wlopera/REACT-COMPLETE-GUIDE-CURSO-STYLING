import React, { useState } from "react";
// import styled from "styled-components";
import styles from "./CourseInput.module.css";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   // &.invalid input {
//   //   border-color: red;
//   //   background-color: #ffd7d7;
//   // }

//   // &.invalid label {
//   //   color: red;
//   // }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);

    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    setEnteredValue("");
    props.onAddGoal(enteredValue);
  };

  return (
    // <form onSubmit={formSubmitHandler}>
    //   <div className={`form-control ${!isValid ? "invalid" : ""}`}>
    //     <label>Meta del curso</label>
    //     <input
    //       type="text"
    //       value={enteredValue}
    //       onChange={goalInputChangeHandler}
    //     />
    //   </div>
    //   <Button type="submit">Agregar</Button>
    // </form>

    // <form onSubmit={formSubmitHandler}>
    //   <FormControl className={!isValid && "invalid"}>
    //     <label>Meta del curso</label>
    //     <input
    //       type="text"
    //       value={enteredValue}
    //       onChange={goalInputChangeHandler}
    //     />
    //   </FormControl>
    //   <Button type="submit">Agregar</Button>
    // </form>

    // <form onSubmit={formSubmitHandler}>
    //   <FormControl invalid={!isValid}>
    //     <label>Meta del curso</label>
    //     <input
    //       type="text"
    //       value={enteredValue}
    //       onChange={goalInputChangeHandler}
    //     />
    //   </FormControl>
    //   <Button type="submit">Agregar</Button>
    // </form>

    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Meta del curso</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Agregar</Button>
    </form>
  );
};

export default CourseInput;
