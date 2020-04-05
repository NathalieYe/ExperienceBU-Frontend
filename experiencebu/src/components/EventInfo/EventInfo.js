import React from 'react';
import { Grid, GridItem, Button } from '@patternfly/react-core';
import './EventInfo.css';
import banner from "../Spotlight/event.jpg"
import arrow from "./leftarrow.png"

export default class EventInfo extends React.Component {
    render() {
        return (
            <Grid className='infogrid'>
            <GridItem span={12} className='goback'> <Button variant="link" >
            <i class="fas fa-chevron-left"></i> Go back to Events 
    </Button>{' '} </GridItem>
            <GridItem span={7} className='headert'>
              Habitat for Humanity Fundraiser Event 
            </GridItem>
            <GridItem span={4} rowSpan={3} className='botpadding'>
              <img src = {banner}/> 
            </GridItem>
            <GridItem span={7} className='subheading'> Event Description </GridItem>
            <GridItem span={6} rowSpan={5} className='topmargin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} rowSpan={0} > Time: 2/3 Wednesday, 6-7 pm </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} rowSpan={0} >Location: Mugar Library, 3rd Floor, Room 305</GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} className='botpadding'> Affiliation: Habitat for Humanity </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} className='italic'> Have questions? </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} className='bold'> CONTACT INFORMATION </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={5} className='botpadding'> Nathalie Ye, nye@bu.edu </GridItem>
            <GridItem span={7}> </GridItem>
            <GridItem span={1} className='botmargin'> <Button isBlock>RSVP</Button> </GridItem>

            
          </Grid>
        ); 
      
    }
}
    

