import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";


import App from "./components/App";
import reducers from "./reducers";


//code for switch statement navigation here?





ReactDOM.render(
<Provider store = {createStore(reducers)}>
<App />
</Provider>, 
document.querySelector("#root"));