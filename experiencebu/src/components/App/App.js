import React from 'react';
import './App.css';
import Masthead from '../MastHead/MastHead.js';
import '@patternfly/react-core/dist/styles/base.css';
import {
  Text
} from '@patternfly/react-core';
import Footer from "../Footer/footer.js"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import clubInfoPage from "../../paths/clubInfoPage.js"
import clubPage from "../../paths/clubPage.js"
import eventInfoPage from "../../paths/eventInfoPage.js"
import homePage from "../../paths/homePage.js"


class App extends React.Component {
  render() {
    return (
   
      <div>
        <Switch>
          <Route path="/eventInfoPage" component={eventInfoPage}>
          </Route>

          <Route path="/clubPage" component={clubPage}>
          </Route>

          <Route path="/clubInfoPage" component={clubInfoPage}>
          </Route>

          <Route path="/" component={homePage}>
          </Route>

        </Switch>
      </div>
  
    )
  }
}


export default App;

