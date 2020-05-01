import React from 'react';
import './tab.css';
import { Grid, GridItem } from '@patternfly/react-core';
import Switch from 'react-switch';
import logo from './logo.png';
import _ from "lodash"

export default class OrgTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          save: true,
          subscribe: false
        };
        this.handleChange1 = () => {
          const value = !this.state.save;
          this.setState({ save: value });
        };
        this.handleChange2 = () => {
            const value = !this.state.subscribe;
            this.setState({ subscribe: value });
          };
      }
    
    render() {
      console.log(this.props)
        return (
                <Grid>
                <GridItem className='smspace' span={12}> </GridItem>
                <GridItem span={1}> <img className='clubpic' src={this.props.props.picture}/></GridItem>
                  <GridItem className='clubtabname' span={5}> {this.props.props.name} </GridItem>
                <GridItem span={1}> 
                <Switch className='swit' id='save' onChange={this.handleChange1} checked={this.state.save} 
                        handleDiameter={24} height={20} onColor={'#4cb5ab'} onHandleColor={'#009688'}/>
                </GridItem>
                <GridItem span={1}> </GridItem>
                <GridItem span={1}> 
                <Switch className='swit' id='subscribe' onChange={this.handleChange2} checked={this.state.subscribe} 
                        handleDiameter={24} height={20} onColor={'#4cb5ab'} onHandleColor={'#009688'}/>
                </GridItem>
                </Grid>
                
        )
    }
}