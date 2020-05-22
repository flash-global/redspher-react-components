import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Docs from "./docs/Docs";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/highlight.js/styles/ocean.css";
require("typeface-montserrat");

ReactDOM.render(
    <React.StrictMode>
        <Docs />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
