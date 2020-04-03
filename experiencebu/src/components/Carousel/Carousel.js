import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from 'react-fa';
import img1 from './img/imageOne.png';
import img2 from './img/imageTwo.JPG';
import img3 from './img/imageThree.jpeg';
import leftie from './img/leftArrow.png';
import rightie from './img/rightArrow.png';

export default class MyCarousel extends Component {
  render() {
    return (
        <Carousel
        autoPlay={4000}
        animationSpeed={1000}
        itemWidth ={400}
        arrowLeft= <img src={leftie}/> 
        arrowRight= <img src={rightie}/> 
        addArrowClickHandler
        infinite
        centered
        dots>
        <img src= {img1} />
        <img src= {img2} />
        <img src= {img3} />  
        </Carousel>
    );
  }
}