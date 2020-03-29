import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";


import App from "./App";




ReactDOM.render(
<Provider>
<App />
</Provider>, 
document.querySelector("#root"));