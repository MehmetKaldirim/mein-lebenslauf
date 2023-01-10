import React, { useState } from "react";

import LoadingIndicator from "./LoadingIndicator";
import "./IngredientForm.module.css";

const IngredientForm = React.memo((props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  };

  return (
    <section className="ingredient-form">
      <form onSubmit={submitHandler}>
        <div className="form-control">
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
        <div className="form-control">
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
        <div className="ingredient-form__actions">
          <button type="submit">Add Ingredient</button>
          {props.loading && <LoadingIndicator />}
        </div>
      </form>
    </section>
  );
});

export default IngredientForm;
