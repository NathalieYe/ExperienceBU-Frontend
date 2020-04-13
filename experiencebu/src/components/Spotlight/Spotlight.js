import React from 'react'; 
import { Grid, GridItem, Button } from '@patternfly/react-core';
import vsa from './vsa.png'
import "./Spotlight.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Spotlight extends React.Component {
    render(){
        return (
            <Grid>
    <GridItem span={12} className = 'headert' >CLUB SPOTLIGHT</GridItem>
    <GridItem span={1}></GridItem>
    <GridItem span={3} rowSpan={4}>
      <img src={vsa}/>
    </GridItem>
    <GridItem span={7} rowSpan={3}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

