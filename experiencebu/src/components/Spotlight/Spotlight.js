import React from 'react'; 
import { Grid, GridItem, Button,Text } from '@patternfly/react-core';
import vsa from './vsa.png'
import "./Spotlight.css"
import Description from "./Description.js"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


export default class Spotlight extends React.Component {
   constructor(props) {
    super(props)
    this.state = {
      clubs: []
    }
  }

   async componentWillMount() {
      console.log("ComponentWillMount is called and data is being fetched")
      const response = await fetch(`http://127.0.0.1:8000/api/organizations/`);
      const json = await response.json();
      console.log("setState called")
      this.setState({ clubs: json });
      console.log("setState is finished")
  }
    
    description(clubs) {
      var Arr = clubs.clubs
      if (Arr.length != 0) {
        return Arr[0].description
      }

      return <Text> LOADING </Text>
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
        return `/clubInfoPage/${Arr[0].id}`
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
    


