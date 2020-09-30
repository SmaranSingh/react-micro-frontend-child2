import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { unregister } from "./serviceWorker";

window.renderChild2 = (containerId, history) => {
  ReactDOM.render(<App history={history} />, document.getElementById(containerId));
  unregister();
};

window.unmountChild2 = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById("Child2-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
