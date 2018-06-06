import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./state/store";
import registerServiceWorker from "./registerServiceWorker";
import { fetchCart } from "./state/cart/actions";

const store = configureStore({});

store.dispatch(fetchCart());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
