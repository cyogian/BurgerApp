import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const inititalState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orders, { id: action.id });
  const updatedState = {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  };
  return updateObject(state, updatedState);
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_START:
      return updateObject(state, { loading: true });

    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);

    case actionTypes.PURCHASE_BURGER_FAIL:
      return updateObject(state, { loading: false });

    case actionTypes.PURCHASE_INIT:
      return updateObject(state, { purchased: false });

    default:
      return state;
  }
};

export default reducer;
