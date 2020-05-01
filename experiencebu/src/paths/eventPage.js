import React from 'react';
import '../components/App/App.css';
import LoggedInMast from '../components/MastHead/LoggedinMast.js';
import Masthead from '../components/MastHead/MastHead.js';
import '@patternfly/react-core/dist/styles/base.css';
import Footer from "../components/Footer/footer.js"
import EventPage from "../components/EventPage/EventPage.js"

class eventInfoPage extends React.Component {
  render() {
    const header = {
      height:"60px",
      width: "302px",
    }
    
    return (
      <div>
        <LoggedInMast></LoggedInMast>
        <EventPage></EventPage>
        <Footer></Footer>
      </div>
    );
  }
}

export default eventInfoPage;

