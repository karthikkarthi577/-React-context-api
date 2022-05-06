import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import ProviderFun from "./Provider";
ReactDOM.render(
    <ProviderFun><App /></ProviderFun>, document.getElementById("root"));
