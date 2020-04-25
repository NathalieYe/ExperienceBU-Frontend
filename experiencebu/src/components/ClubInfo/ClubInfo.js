import React from 'react';
import { Grid, GridItem, Button } from '@patternfly/react-core';
import './ClubInfo.css';
import banner from "./rose.jpg"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



export default class ClubInfo extends React.Component {
  constructor(props) {
    super(props)
    this.clubName = this.props.props.match.params.name
    console.log(this.clubName)
    this.state = {
      club: {}
    }
    
    
  }
  
  async componentWillMount() {
      //console.log("ComponentWillMount is called and data is being fetched")
      //const response = await fetch(`http://localhost:5000/queryClub/${this.clubName}`);
      const response = await fetch(`http://localhost:4100/clubs`);
      const json = await response.json();
      this.setState({ club: json });
      console.log("Look Here")
      console.log(this.state)
  }

    render() {
        return (
            <Grid className='infogrid'>
            <GridItem span={12} className='goback'> <Link to="/clubPage"> <Button variant="link" >
            <i class="fas fa-chevron-left"></i> Go back to Clubs 
            </Button>{' '} </Link> </GridItem>
            <GridItem span={7} className='headert'>
              {this.state.club.name}
            </GridItem>
            <GridItem span={4} rowSpan={3} className='botpadding'>
              <img src = {this.state.club.picture}/> 
            </GridItem>
            <GridItem span={7} className='subheading'> Club Description </GridItem>
            <GridItem span={6} rowSpan={5} className='topmargin'>{this.state.club.description}
            </GridItem>
            <GridItem span={7} rowSpan={2} className='subheading'>Eboard Members:  </GridItem>
            <GridItem span={5}> Meeting Time: {this.state.club.time} </GridItem>
            <GridItem span={5}> Location: {this.state.club.location} </GridItem>
            <GridItem span={6} rowSpan={2}>  {this.state.club.eboard} </GridItem>
            <GridItem span={1}></GridItem>
            <GridItem span={5} className='italic'> Have questions? </GridItem>
            <GridItem span={1}></GridItem>
            <GridItem span={5} className='bold'> CONTACT INFORMATION </GridItem>
            <GridItem span={7}></GridItem>
            <GridItem span={5}>{this.state.club.contact} </GridItem>
            <GridItem span={7}></GridItem>
            <GridItem span={1} className='botmargin'> <Button isBlock>Subscribe</Button> </GridItem>
        
          </Grid>
        ); 
      
    }
}
    

