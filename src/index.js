import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import burgerBuilderReducer from "./store/reducers/burgerBuilderReducer";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  burgerBuilderReducer,
  /* preloadedState, */ devToolsEnhancer()
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
);

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
