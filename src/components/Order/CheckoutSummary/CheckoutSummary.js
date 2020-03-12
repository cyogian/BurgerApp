import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../../components/UI/Button/Button";

import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div
        style={{
          width: "100%",
          margin: "auto"
        }}
      >
        <Burger ingredients={props.ingredients} />
        <p>
          <strong>Total Price: ${props.price.toFixed(2)}</strong>
        </p>
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
