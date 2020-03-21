import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_INIT:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        loading: false
      };
    case actionTypes.FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
