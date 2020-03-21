import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
  };
};

const fetchOrdersFail = () => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL
  };
};

const fetchOrdersInit = () => {
  return {
    type: actionTypes.FETCH_ORDERS_INIT
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersInit());
    axios
      .get("/orders.json")
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(error => {
        dispatch(fetchOrdersFail());
      });
  };
};
