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
    description(clubs) {
      var Arr = clubs.clubs
      if (Arr.length != 0) {
        return Arr[0].description
      }

      return <Text> Helloitme </Text>
    }

    image(clubs) {
      var Arr = clubs.clubs
      if (Arr.length != 0) {
        return Arr[0].picture
      }
      return {vsa}
    }

    linkto(clubs) {
      var Arr = clubs.clubs
      if (Arr.length != 0) {
        return `/clubInfoPage/${Arr[0].name}`
      }
      return "/clubInfoPage"
    }
    

    clubName(clubs) {
      var Arr = clubs.clubs
      if (Arr.length != 0) {
        return Arr[0].name
      }
      return "Loading"
    }
  

    render() {
    return (
    <Grid>
    <GridItem span={12} className = 'headert' >Organization Spotlight</GridItem>
    <GridItem span={4} rowSpan={4}>
      <img className='image' src={this.image(this.state)}/>
    </GridItem>
    <GridItem span={7} className='clubname'> {this.clubName(this.state)} </GridItem> 
    <GridItem span={7} rowSpan={2}>
      {this.description(this.state)}
    </GridItem>
    <GridItem span={1}></GridItem>
    <GridItem span={6}></GridItem>
    <GridItem span={1}>  <Link to={this.linkto(this.state)}> <Button variant="link" isInline>
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
    


