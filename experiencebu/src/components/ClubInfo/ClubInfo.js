import React from 'react';
import { Grid, GridItem, Button } from '@patternfly/react-core';
import './ClubInfo.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import _ from "lodash";
import axios from 'axios';


export default class ClubInfo extends React.Component {
  constructor(props) {
    super(props)
    this.clubID = this.props.props.match.params.name
    this.state = {
      club: {},
      clubevents: {},
      user: {},
      subscribed: false,
      isSignedIn: true
    }
    this.handleClick = () => {
      let subscribed = this.state.subscribed;
      let updatedsub = this.state.user[0].subscriptions.concat([Number(this.clubID)]);
      updatedsub = updatedsub.sort()
      console.log(updatedsub)
      const axios = require('axios').default;
      axios.post('http://127.0.0.1:8000/api/profile/1', {subscriptions: updatedsub})
      this.setState({subscribed: !subscribed})
    }
  }
  
  async componentWillMount() {
      //const response = await fetch(`http://localhost:5000/queryClub/${this.clubName}`);
      const response = await fetch(`http://127.0.0.1:8000/api/organizations/${this.clubID}`);
      const getClubEvents = await fetch(`http://127.0.0.1:8000/api/events/by/${this.clubID}`);
      const getprofile = await fetch(`http://127.0.0.1:8000/api/profile`);
      const json = await response.json();
      const json2 = await getClubEvents.json();
      const json3 = await getprofile.json();
      console.log(!(_.isEmpty(_.intersection(json3[0].subscriptions,[Number(this.clubID)]))))
      this.setState({ club: json , clubevents: json2, user: json3, subscribed: !(_.isEmpty(_.intersection(json3[0].subscriptions,[Number(this.clubID)])))});  
  }

    render() {
      let button = ""
      if (this.state.isSignedIn) {
        if (!_.isEmpty(this.state.user)){
          if (this.state.subscribed) {
            button = <Button isDisabled='true' isBlock>Saved to My Organizations</Button>;
          }
          else {
            button = <Button onClick={this.handleClick} isBlock>Save to My Organizations</Button>;
          }
        }
      }
      let clubpage = <div></div>
      if (!_.isEmpty(this.state.clubevents)) {
        console.log(this.state.clubevents)
        if (this.state.clubevents.count == 0) {
          clubpage =  <Grid className='infogrid'>
          <GridItem span={12} className='goback'> <Link to="/clubPage"> <Button variant="link" >
          <i class="fas fa-chevron-left"></i> Go back to Organizations 
          </Button>{' '} </Link> </GridItem>
          <GridItem span={7} className='headder'>
            {this.state.club.name}
          </GridItem>
          <GridItem span={4} rowSpan={3} className='botpadding'>
            <img src = {this.state.club.picture}/> 
          </GridItem>
          <GridItem span={7} className='subheading'> Organization Description: </GridItem>
          <GridItem span={6} rowSpan={5} className='topmargin'>{this.state.club.description}
          </GridItem>
          <GridItem span={7} rowSpan={2} className='subheading'>Eboard Members:  </GridItem>
          <GridItem span={5}> Meeting Time: {this.state.club.time} </GridItem>
          <GridItem span={5}> Location: {this.state.club.location} </GridItem>
          <GridItem span={6} rowSpan={5}>  {this.state.club.eboard} </GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={5} className='italic'> Have questions? </GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={5} className='bold'> Contact Information: </GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={5}>{this.state.club.contact} </GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={2} className='botmargin'> {button} </GridItem>
{/*
          <GridItem span={5}> </GridItem>
          <GridItem span={12}> {this.state.clubevents.results[0].name} </GridItem>
          <GridItem span={12}> {this.state.clubevents.results[1].name}</GridItem>
      <GridItem className='botmargin'></GridItem> */}
        </Grid>
        }
        else {
          clubpage = <Grid className='infogrid'>
          <GridItem span={12} className='goback'> <Link to="/clubPage"> <Button variant="link" >
          <i class="fas fa-chevron-left"></i> Go back to Organizations 
          </Button>{' '} </Link> </GridItem>
          <GridItem span={7} className='headder'>
            {this.state.club.name}
          </GridItem>
          <GridItem span={4} rowSpan={3} className='botpadding'>
            <img src = {this.state.club.picture}/> 
          </GridItem>
          <GridItem span={7} className='subheading'> Organization Description: </GridItem>
          <GridItem span={6} rowSpan={5} className='topmargin'>{this.state.club.description}
          </GridItem>
          <GridItem span={7} rowSpan={2} className='subheading'>Eboard Members:  </GridItem>
          <GridItem span={5}> Meeting Time: {this.state.club.time} </GridItem>
          <GridItem span={5}> Location: {this.state.club.location} </GridItem>
          <GridItem span={6} rowSpan={5}>  {this.state.club.eboard} </GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={5} className='italic'> Have questions? </GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={5} className='bold'> Contact Information: </GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={5}>{this.state.club.contact} </GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={2} className='botmargin'> {button} </GridItem>
          <GridItem span={7} className='subheading'> Upcoming Events: </GridItem>

          <GridItem span={5}> </GridItem>
          <Link to={{
                      pathname: `/eventInfoPage/${this.state.clubevents.results[0].id}`,
                      state: {
                          fromNotifications: true
                            }
            }}>
          <GridItem span={12}> {this.state.clubevents.results[0].name} </GridItem>
          </Link>
          <GridItem className='botmargin'> </GridItem>    
          </Grid>
        }
      }

      return (
      <div>{clubpage}</div>
      );
      /*if (_.isEmpty(this.state.clubevents)) {
        return (
            <Grid className='infogrid'>
            <GridItem span={12} className='goback'> <Link to="/clubPage"> <Button variant="link" >
            <i class="fas fa-chevron-left"></i> Go back to Organizations 
            </Button>{' '} </Link> </GridItem>
            <GridItem span={7} className='headder'>
              {this.state.club.name}
            </GridItem>
            <GridItem span={4} rowSpan={3} className='botpadding'>
              <img src = {this.state.club.picture}/> 
            </GridItem>
            <GridItem span={7} className='subheading'> Organization Description: </GridItem>
            <GridItem span={6} rowSpan={5} className='topmargin'>{this.state.club.description}
            </GridItem>
            <GridItem span={7} rowSpan={2} className='subheading'>Eboard Members:  </GridItem>
            <GridItem span={5}> Meeting Time: {this.state.club.time} </GridItem>
            <GridItem span={5}> Location: {this.state.club.location} </GridItem>
            <GridItem span={6} rowSpan={5}>  {this.state.club.eboard} </GridItem>
            <GridItem span={1}></GridItem>
            <GridItem span={5} className='italic'> Have questions? </GridItem>
            <GridItem span={1}></GridItem>
            <GridItem span={5} className='bold'> Contact Information: </GridItem>
            <GridItem span={1}></GridItem>
            <GridItem span={5}>{this.state.club.contact} </GridItem>
            <GridItem span={1}></GridItem>
            <GridItem span={2} className='botmargin'> {button} </GridItem>
            <GridItem span={7} className='subheading'> Upcoming Events: </GridItem>
{
            <GridItem span={5}> </GridItem>
            <GridItem span={12}> {this.state.clubevents.results[0].name} </GridItem>
            <GridItem span={12}> {this.state.clubevents.results[1].name}</GridItem>
        <GridItem className='botmargin'></GridItem> }
        
        
          </Grid>
             ); 
        }
      else {
        return (
          <Grid className='infogrid'>
          <GridItem span={12} className='goback'> <Link to="/clubPage"> <Button variant="link" >
          <i class="fas fa-chevron-left"></i> Go back to Organizations 
          </Button>{' '} </Link> </GridItem>
          <GridItem span={7} className='headder'>
            {this.state.club.name}
          </GridItem>
          <GridItem span={4} rowSpan={3} className='botpadding'>
            <img src = {this.state.club.picture}/> 
          </GridItem>
          <GridItem span={7} className='subheading'> Organization Description: </GridItem>
          <GridItem span={6} rowSpan={5} className='topmargin'>{this.state.club.description}
          </GridItem>
          <GridItem span={7} rowSpan={2} className='subheading'>Eboard Members:  </GridItem>
          <GridItem span={5}> Meeting Time: {this.state.club.time} </GridItem>
          <GridItem span={5}> Location: {this.state.club.location} </GridItem>
          <GridItem span={6} rowSpan={5}>  {this.state.club.eboard} </GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={5} className='italic'> Have questions? </GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={5} className='bold'> Contact Information: </GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={5}>{this.state.club.contact} </GridItem>
          <GridItem span={1}></GridItem>
          <GridItem span={2} className='botmargin'> {button} </GridItem>
          <GridItem span={7} className='subheading'> Upcoming Events: </GridItem>

          <GridItem span={5}> </GridItem>
          <Link to={{
                      pathname: `/eventInfoPage/${this.state.clubevents.results[0].id}`,
                      state: {
                          fromNotifications: true
                            }
            }}>
          <GridItem span={12}> {this.state.clubevents.results[0].name} </GridItem>
          </Link>
          <GridItem className='botmargin'> </GridItem>    
          </Grid>
        )}
      
     */
      
    }
}
    

