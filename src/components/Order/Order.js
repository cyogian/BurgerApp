import React from "react";
import classes from "./Order.module.css";

const Order = props => (
  <div className={classes.Order}>
    <p>
      Ingredients <br />
      {Object.keys(props.ingredients).map(igKey => (
        <span key={igKey}>{`${igKey} (${props.ingredients[igKey]})`}</span>
      ))}
    </p>
    <p>
      Price: <strong>USD {props.price.toFixed(2)}</strong>
    </p>
  </div>
);

export default Order;
