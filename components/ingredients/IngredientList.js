import React from "react";

import Card from "../ui/Card";
import classes from "./IngredientList.module.css";

const IngredientList = (props) => {
  return (
    <Card>
      <section className={classes.ingredient}>
        <h2>Loaded Ingredients</h2>
        <ul>
          {props.ingredients.map((ig) => (
            <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
              <span>{ig.title}</span>
              <span>{ig.amount}x</span>
            </li>
          ))}
        </ul>
      </section>
    </Card>
  );
};

export default IngredientList;
