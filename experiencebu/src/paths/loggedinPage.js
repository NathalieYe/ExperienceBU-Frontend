import React from 'react';
import '../components/App/App.css';
import LoggedInMast from '../components/MastHead/LoggedinMast.js';
import '@patternfly/react-core/dist/styles/base.css';
import Carousel from '../components/Carousel/Carousel.js';
import '../components/Carousel/Carousel.css';
import Spotlight from '../components/Spotlight/Spotlight.js'
import "../components/Spotlight/Spotlight.css"
import Footer from "../components/Footer/footer.js"

class homePage extends React.Component {
  render() {
    const header = {
      height:"60px",
      width: "302px",
    }
    
    return (
      <div>
        <LoggedInMast></LoggedInMast>
        <div className="carouselbg">
        <Carousel>
        </Carousel>
        </div>
        <Spotlight></Spotlight>
        <Footer></Footer>
      </div>
    );
  }
}

export default homePage;
