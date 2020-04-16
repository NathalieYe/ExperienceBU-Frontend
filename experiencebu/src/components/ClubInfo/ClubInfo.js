import React from 'react';
import { Grid, GridItem, Button } from '@patternfly/react-core';
import './ClubInfo.css';
import banner from "./rose.jpg"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class ClubInfo extends React.Component {
    render() {
        return (
            <Grid className='infogrid'>
            <GridItem span={12} className='goback'> <Link to="/clubPage"> <Button variant="link" >
            <i class="fas fa-chevron-left"></i> Go back to Clubs 
            </Button>{' '} </Link> </GridItem>
            <GridItem span={7} className='headert'>
              Ad Club 
            </GridItem>
            <GridItem span={4} rowSpan={3} className='botpadding'>
              <img src = {banner}/> 
            </GridItem>
            <GridItem span={7} className='subheading'> Club Description </GridItem>
            <GridItem span={6} rowSpan={5} className='topmargin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </GridItem>
            <GridItem span={7} rowSpan={2} className='subheading'>Club Requirements: </GridItem>
            <GridItem span={5}> Meeting Time: 2/3 Wednesday, 6-7 pm </GridItem>
            <GridItem span={5}> Location: Mugar Library, 3rd Floor, Room 305</GridItem>
            <GridItem span={6} rowSpan={2}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </GridItem>
            <GridItem span={1}></GridItem>
            <GridItem span={5} className='italic'> Have questions? </GridItem>
            <GridItem span={1}></GridItem>
            <GridItem span={5} className='bold'> CONTACT INFORMATION </GridItem>
            <GridItem span={7}></GridItem>
            <GridItem span={5}> Ben Vu, bvu@bu.edu </GridItem>
            <GridItem span={7} className='subheading'> Eboard Members: </GridItem>
            <GridItem span={1}> <Button isBlock>Subscribe</Button> </GridItem>
            <GridItem span={7} rowSpan={3} className='botmargin'> Ben Vu - President; 
            Tung Truong - Vice President
            </GridItem>
        
          </Grid>
        ); 
      
    }
}
    

