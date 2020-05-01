import React from 'react';
import { Grid, GridItem, Button } from '@patternfly/react-core';
import './EventInfo.css';
import banner from "../Spotlight/event.jpg"
import { withRouter } from 'react-router-dom'
import _ from "lodash"



class EventInfo extends React.Component {

  constructor(props) {
    super(props)
    console.log("Event Info Page")
    this.eventID = this.props.match.params.name
    this.state = {
      event: {},
      user: {},
      isSignedIn: true,
      rsvp: false
    }
    this.handleClick = () => {
      let rsvp = this.state.rsvp;
      let updatedsub = this.state.user[0].events.push(this.eventID);
      //updatedsub = updatedsub.sort()
      //axios.post('/api/profile/Cupcakineer', {subscriptions: updatedsub})
      this.setState({rsvp: !rsvp})
    }
    
  }

    
  async componentWillMount() {
    const response = await fetch(`http://127.0.0.1:8000/api/events/${this.eventID}`);
    const getprofile = await fetch(`http://127.0.0.1:8000/api/profile`);
    const json = await response.json();
    const json2 = await getprofile.json();
    this.setState({ event: json, user: json2 });
}


    render() {
      let button = ""
      if (this.state.isSignedIn) {
        if (!_.isEmpty(this.state.user)){
          if (this.state.rsvp) {
            button = <Button isDisabled='true' isBlock> Going!</Button>;
          }
          else {
            button = <Button onClick={this.handleClick} isBlock>Save to My Events</Button>;
          }
        }
      }
      
        return (
            <Grid className='infogrid'>
            <GridItem span={12} className='goback'> <Button variant="link" >
            <i class="fas fa-chevron-left"></i> Go back to Events 
            </Button>{' '} </GridItem>
            <GridItem span={7} className='headerr'>
              {this.state.event.name}
            </GridItem>
            <GridItem span={4} rowSpan={3} className='botpadding'>
              <img src = {this.state.event.picture}/> 
            </GridItem>
            <GridItem span={7} className='subheading'> Event Description: </GridItem>
            <GridItem span={6} rowSpan={5} className='topmargin'> {this.state.event.description}
            </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} rowSpan={0} >{this.state.event.location} {this.state.event.time} </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} className='botpadding'> {this.state.event.affiliation} </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} className='italic'> Have questions? </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} className='bold'> Contact Information: </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} className='botpadding'> {this.state.event.contact} </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={2} className='botmargin'> {button} </GridItem>

            
          </Grid>
        ); 
      
    }
}
    

  export default withRouter(EventInfo);
