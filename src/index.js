import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css"

ReactDOM.render(
<App className = "indexClass"/>,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept('./App', () => {
        //const App = require('./App').default;
        render(App);
    });
}