import React, { Component } from "react";
import { connect } from "react-redux";

import * as burgerBuilderActions from "../../store/actions/burgerBuilderActions";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    // axios
    //   .get("/ingredients.json")
    //   .then(response => {
    //     const ingredients = response.data;
    //     let totalPrice = Object.keys(ingredients).reduce(
    //       (totalPrice, igKey) =>
    //         totalPrice + INGREDIENT_PRICES[igKey] * ingredients[igKey],
    //       this.props.totalPrice
    //     );
    //     this.setState({ ingredients, totalPrice }, () =>
    //       this.updatePurchaseState(response.data)
    //     );
    //   })
    //   .catch(err => {
    //     this.setState({ error: true });
    //   });
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  purchaseContinueHandler = () => {
    this.props.history.push("/checkout");
  };

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((acc, v) => acc + v, 0);

    return sum > 0;
  };

  render() {
    let burger = this.state.error ? (
      <p style={{ textAlign: "center" }}>Oops, Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );
    let orderSummary = null;
    if (this.props.ingredients) {
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          cancelPurchase={this.purchaseCancelHandler}
          continuePurchase={this.purchaseContinueHandler}
          price={this.props.totalPrice}
        />
      );

      if (this.state.loading) {
        orderSummary = <Spinner />;
      }
      let disabledInfo = {
        ...this.props.ingredients
      };
      for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;
      burger = (
        <>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.totalPrice}
            purchasable={this.updatePurchaseState(this.props.ingredients)}
            purchasing={this.purchaseHandler}
          />
        </>
      );
    }

    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingredientName =>
      dispatch(burgerBuilderActions.addIngredient(ingredientName)),
    onIngredientRemoved: ingredientName =>
      dispatch(burgerBuilderActions.removeIngredient(ingredientName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
