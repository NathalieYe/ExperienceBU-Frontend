import React from 'react';
import '../components/App/App.css';
import Masthead from '../components/MastHead/MastHead.js';
import '@patternfly/react-core/dist/styles/base.css';
import Footer from "../components/Footer/footer.js"
import EventPage from "../components/EventPage/EventPage.js"

class clubInfoPage extends React.Component {
  render() {
    const header = {
      height:"60px",
      width: "302px",
    }
    
    return (
      <div>
        <Masthead></Masthead>
        <EventPage></EventPage>
        <Footer></Footer>
      </div>
    );
  }
}

export default clubInfoPage;

