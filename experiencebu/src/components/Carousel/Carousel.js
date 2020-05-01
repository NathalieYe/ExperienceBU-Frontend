import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Carousel.css';
import {
  Link
} from "react-router-dom";
import _ from "lodash"


export default class MyCarousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: {},
    }
  }

  async componentWillMount() {
    console.log("ComponentDidMount called")
    const response = await fetch(`http://127.0.0.1:8000/api/events/`);
    const json = await response.json();
    this.setState({ events: json });
  }

  render() {
    var img1 = "";
    var img2 = "";
    var img3 = "";
    if (_.isEmpty(this.state.events) !== true) {
      img1 = this.state.events[2].picture
      img2 = this.state.events[1].picture
      img3 = this.state.events[4].picture
    }

    return (
        <Carousel
        autoPlay={3000}
        animationSpeed={1000}
        itemWidth ={650}
        arrowLeft= {<i class="fas fa-chevron-left fa-3x"></i>}
        arrowRight= {<i class="fas fa-chevron-right fa-3x"></i>}
        addArrowClickHandler
        infinite
        centered
        dots
    >
        <Link to={`/eventInfoPage/2`}> <img src= {img1} /> </Link>
        <Link to={`/eventInfoPage/1`}> <img src= {img2} /> </Link>
        <Link to={`/eventInfoPage/4`}> <img src= {img3} /> </Link>
        </Carousel>
    );
  }
}