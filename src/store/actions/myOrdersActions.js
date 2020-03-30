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

export const fetchOrders = (token, userId) => {
  return dispatch => {
    dispatch(fetchOrdersInit());
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    axios
      .get("/orders.json" + queryParams)
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
