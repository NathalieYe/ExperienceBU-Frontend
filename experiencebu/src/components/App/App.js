import React from 'react';
import './App.css';
import Masthead from '../MastHead/MastHead.js';
import '@patternfly/react-core/dist/styles/base.css';
import {
  Text
} from '@patternfly/react-core';
import Carousel from '../Carousel/Carousel.js';
import Spotlight from '../Spotlight/Spotlight.js'
import "../Spotlight/Spotlight.css"
import Footer from "../Footer/footer.js"

class App extends React.Component {
  render() {
    const header = {
      height:"60px",
      width: "302px",
    }
    
    return (
      <div>
        <Masthead></Masthead>
        <Text className = 'headert'>
        EVENTS OF THE WEEK
        </Text>
        <Carousel>
        </Carousel>
        <Spotlight></Spotlight>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

/*
{'height: 60px;width: 302px; color: #0E0E0E;font-family:"Red Hat Display";font-size: 24px;font-weight: 500;letter-spacing: 0;line-height: 31px;'}> 
.events-of-the-week {
  height: 60px;
  width: 302px;
  color: #0E0E0E;
  font-family: "Red Hat Display";
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 31px;
}
*/