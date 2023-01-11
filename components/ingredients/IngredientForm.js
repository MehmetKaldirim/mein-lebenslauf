import React, { useState } from "react";
import Card from "../ui/Card";

import LoadingIndicator from "./LoadingIndicator";
import classes from "./IngredientForm.module.css";

const IngredientForm = React.memo((props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Name</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={(event) => {
              setEnteredTitle(event.target.value);
            }}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={enteredAmount}
            onChange={(event) => {
              setEnteredAmount(event.target.value);
            }}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Ingredient</button>
          {props.loading && <LoadingIndicator />}
        </div>
      </form>
    </Card>
  );
});

export default IngredientForm;
