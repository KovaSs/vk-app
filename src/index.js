import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import App from "./components/App";

import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <div className ='app'>
      <App />
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
