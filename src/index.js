import React from "react";
import { hydrate, render } from "react-dom";
// import "reset-css"; // removed native reset-css due to React95 reset in App.js
import store from "./app/redux/store";
import App from "./app/App";
import "./index.css";

const root = document.getElementById("root");

const ConnectedApp = <App store={store} />;

if (root.hasChildNodes()) hydrate(ConnectedApp, root);
else render(ConnectedApp, root);
