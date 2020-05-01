import React from 'react';
import '../components/App/App.css';
import LoggedInMast from '../components/MastHead/LoggedinMast.js';
import Masthead from '../components/MastHead/MastHead.js';
import '@patternfly/react-core/dist/styles/base.css';
import {
  Text
} from '@patternfly/react-core';
import Footer from "../components/Footer/footer.js"
import EventInfo from "../components/EventInfo/EventInfo.js"

class eventInfoPage extends React.Component {
  render() {
    const header = {
      height:"60px",
      width: "302px",
    }
    
    return (
      <div>
        <LoggedInMast></LoggedInMast>
        <EventInfo></EventInfo>
        <Footer className='foota'></Footer>
      </div>
    );
  }
}

export default eventInfoPage;

