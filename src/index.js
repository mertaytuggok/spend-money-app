import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}></Provider>
    <App />
  </React.StrictMode>
);
reportWebVitals();
