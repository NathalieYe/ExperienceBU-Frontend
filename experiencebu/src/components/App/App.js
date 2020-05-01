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
import eventPage from "../../paths/eventPage.js"
import userinfoPage from "../../paths/userinfoPage.js"
import loggedinPage from "../../paths/loggedinPage"


class App extends React.Component {
  render() {
    return (
   
      <div>
        <Switch>
          {/*Static Routes*/}
          <Route path="/clubPage" component={clubPage}>
          </Route>

          <Route path="/eventPage" component={eventPage}>
          </Route>

          <Route path="/userinfoPage" component={userinfoPage}> 
          </Route>

          <Route path="/loggedinPage" component={loggedinPage}>
          </Route>

        {/*Dynamic Routes*/}
          <Route exact path="/clubInfoPage/:name" component={clubInfoPage}>
          </Route>

          <Route exact path="/eventInfoPage/:name" component={eventInfoPage}>
          </Route>

          <Route path="/" component={homePage}>
          </Route>

        </Switch>
      </div>
  
    )
  }
}


export default App;

