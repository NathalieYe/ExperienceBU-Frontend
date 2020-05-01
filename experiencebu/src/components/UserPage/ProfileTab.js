import React from 'react';
import './tab.css';
import { Grid, GridItem } from '@patternfly/react-core';
import logo from './logo.png';
import _ from "lodash"


export default class ProfileTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    async componentWillMount() {
        const response = await fetch(`http://127.0.0.1:8000/api/profile/`);
        const json = await response.json();
        this.setState({ user: json })
        console.log(this.state.user);
      }

    render() {
        if (!(_.isEmpty(this.state.user))) { 
        return (
            <div className='itme'>
            <Grid>
            <GridItem className='space' span={12}> </GridItem>
            <GridItem span={2} rowSpan={4}> <img className='propic' src={this.state.user[0].image}/> </GridItem>
        <GridItem className='name' span={10}> {this.state.user[0].first_name} {this.state.user[0].last_name} </GridItem>
            <GridItem className='textindent' span={10}> {this.state.user[0].major}  </GridItem>
            <GridItem className='textindent' span={10}> {this.state.user[0].year} </GridItem>
            <GridItem className='smspace' span={12}> </GridItem>
            <GridItem className='subhead' span={12}> ABOUT ME </GridItem>
            <GridItem className='smspace' span={12}> </GridItem>
            <GridItem span={12}> {this.state.user[0].introduction} </GridItem> 
            <GridItem className='smspace' span={12}> </GridItem>
            <GridItem className='subhead' span={12}> INTERESTS: </GridItem>
            <GridItem className='smspace' span={12}> </GridItem>
            <GridItem span={12}> {this.state.user[0].tags} </GridItem>
            <GridItem className='space' span={12}> </GridItem>
            </Grid>
            </div>
        )
       }
       return(
            <div> Loading </div>
       )
    }
}