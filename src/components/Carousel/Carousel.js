import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import img1 from './img/imageOne.png';
import img2 from './img/imageTwo.JPG';
import img3 from './img/imageThree.jpeg';

export default class MyCarousel extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <Carousel
        autoPlay={4000}
        animationSpeed={1000}
        itemWidth ={700}
        arrowLeft= {<i class="fas fa-chevron-left fa-3x"></i>}
        arrowRight= {<i class="fas fa-chevron-right fa-3x"></i>}
        addArrowClickHandler
        infinite
        centered
        dots
    >
        <img src= {img1} />
        <img src= {img2} />
        <img src= {img3} />  
        </Carousel>
    );
  }
}