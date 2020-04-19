import React from 'react'; 
import { Grid, GridItem, Button,Text } from '@patternfly/react-core';
import vsa from './vsa.png'
import "./Spotlight.css"
import Description from "./Description.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// console.log(this.state) 
//console.log(this.state.clubs[0].description)


export default class Spotlight extends React.Component {
   constructor(props) {
    super(props)
    this.state = {
      clubs: []
    }
  }

   async componentWillMount() {
      console.log("ComponentWillMount is called and data is being fetched")
      const response = await fetch(`http://localhost:4000/clubs`);
      const json = await response.json();
      console.log("setState called")
      this.setState({ clubs: json });
      console.log("setState is finished")
  }
    
/*
    renderMyData() {
      console.log("fetched called")
      fetch('http://localhost:4000/clubs')
      .then(res => res.json())
      .then((data) => {
        console.log("Data has been fetched")
        this.setState({ clubs: data })
       
      })
      .catch(console.log)
    }
  */


    render() {
      console.log("Render Method Called")
      console.log(this.state)
      if (this.state.clubs[0]){
        return (
          <Grid>
          <GridItem span={12} className = 'headert' >Organization Spotlight</GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={3} rowSpan={4}>
            <img src="http://lorempixel.com/640/480/city"/>
          </GridItem>
          <GridItem span={7} rowSpan={3}>
           {this.state.clubs[0].description}
          </GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={6}></GridItem>
          <GridItem span={1}>  <Link to="/clubInfoPage"> <Button variant="link" isInline>
            Learn More
          </Button>   
         </Link>
          </GridItem>
          <GridItem span={1}> </GridItem>
          <GridItem span={12} className = 'bottom'></GridItem>
        </Grid>
        )
    }

    return (
    <Grid>
    <GridItem span={12} className = 'headert' >Organization Spotlight</GridItem>
    <GridItem span={1}></GridItem>
    <GridItem span={3} rowSpan={4}>
      <img src={vsa}/>
    </GridItem>
    <GridItem span={7} rowSpan={3}>
     <Description clubs={this.state.clubs} ></Description>
    </GridItem>
    <GridItem span={1}></GridItem>
    <GridItem span={6}></GridItem>
    <GridItem span={1}>  <Link to="/clubInfoPage"> <Button variant="link" isInline>
      Learn More
    </Button>   
   </Link>
    </GridItem>
    <GridItem span={1}> </GridItem>
    <GridItem span={12} className = 'bottom'></GridItem>
  </Grid>

            
        );
        
    }
}
    


