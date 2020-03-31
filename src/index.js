// React imports
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// redux Imports
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducer imports
import burgerBuilderReducer from "./store/reducers/burgerBuilderReducer";
import orderReducer from "./store/reducers/orderReducer";
import myOrdersReducer from "./store/reducers/myOrdersReducer";
import authReducer from "./store/reducers/authReducer";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

let middleware = composeEnhancers(applyMiddleware(thunk));
if (process.env.NODE_ENV !== "development") {
  middleware = applyMiddleware(thunk);
}

const rootReducer = combineReducers({
  builder: burgerBuilderReducer,
  order: orderReducer,
  myOrders: myOrdersReducer,
  auth: authReducer
});

const store = createStore(rootReducer, middleware);

const app = (
  <Provider store={store}>
    <BrowserRouter basename="/BurgerApp">
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
