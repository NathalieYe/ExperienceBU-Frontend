import React from 'react';
import { Grid, GridItem, Button } from '@patternfly/react-core';
import './EventInfo.css';
import banner from "../Spotlight/event.jpg"


export default class EventInfo extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      event: {}
    }
    
    
  }

    
  async componentWillMount() {
    const response = await fetch(`http://127.0.0.1:8000/api/events/0`);
    const json = await response.json();
    this.setState({ event: json });
}

  
    render() {
        return (
            <Grid className='infogrid'>
            <GridItem span={12} className='goback'> <Button variant="link" >
            <i class="fas fa-chevron-left"></i> Go back to Events 
    </Button>{' '} </GridItem>
            <GridItem span={7} className='headert'>
              {this.state.event.name}
            </GridItem>
            <GridItem span={4} rowSpan={3} className='botpadding'>
              <img src = {this.state.event.picture}/> 
            </GridItem>
            <GridItem span={7} className='subheading'> Event Description </GridItem>
            <GridItem span={6} rowSpan={5} className='topmargin'> {this.state.event.description}
            </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} rowSpan={0} > </GridItem>
            <GridItem span={7}> </GridItem> {this.state.event.description}
            <GridItem span={5} rowSpan={0} >{this.state.event.location} {this.state.event.time} </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} className='botpadding'> {this.state.event.affiliation} </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} className='italic'> Have questions? </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} className='bold'> CONTACT INFORMATION </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} className='botpadding'> {this.state.event.contact} </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={1} className='botmargin'> <Button isBlock>RSVP</Button> </GridItem>

            
          </Grid>
        ); 
      
    }
}
    

