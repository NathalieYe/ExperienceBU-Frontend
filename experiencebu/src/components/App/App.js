import React from 'react';
import './App.css';
import Masthead from '../MastHead/MastHead.js';
import '@patternfly/react-core/dist/styles/base.css';
import {
  Text
} from '@patternfly/react-core';
import Footer from "../Footer/footer.js"
import ClubInfo from "../ClubInfo/ClubInfo.js"

class App extends React.Component {
  render() {
    const header = {
      height:"60px",
      width: "302px",
    }
    
    return (
      <div>
        <Masthead></Masthead>
        <ClubInfo></ClubInfo>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

