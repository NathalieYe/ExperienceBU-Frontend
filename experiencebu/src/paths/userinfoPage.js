import React from 'react';
import '../components/App/App.css';
import Masthead from '../components/MastHead/MastHead.js';
import '@patternfly/react-core/dist/styles/base.css';
import Footer from "../components/Footer/footer.js"
import UserPage from "../components/UserPage/UserPage.js"

class userinfoPage extends React.Component {
  render() {
    const header = {
      height:"60px",
      width: "302px",
    }
    
    return (
      <div>
        <Masthead></Masthead>
        <UserPage></UserPage>
      </div>
    );
  }
}

export default userinfoPage;

