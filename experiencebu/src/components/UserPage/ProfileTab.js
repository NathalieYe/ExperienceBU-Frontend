import React from 'react';
import './tab.css';
import { Grid, GridItem } from '@patternfly/react-core';
import logo from './logo.png';

export default class ProfileTab extends React.Component {
    render() {
        return (
            <div className='itme'>
            <Grid>
            <GridItem className='space' span={12}> </GridItem>
            <GridItem span={2} rowSpan={4}> <img className='propic' src={logo}/> </GridItem>
            <GridItem className='name' span={10}> Name </GridItem>
            <GridItem span={10}> Major </GridItem>
            <GridItem span={10}> Class of 202X </GridItem>
            <GridItem className='smspace' span={12}> </GridItem>
            <GridItem className='subhead' span={12}> ABOUT ME </GridItem>
            <GridItem className='smspace' span={12}> </GridItem>
            <GridItem span={12}> *Insert Cheesy Introduction* </GridItem>
            <GridItem className='smspace' span={12}> </GridItem>
            <GridItem className='subhead' span={12}> INTERESTS: </GridItem>
            <GridItem className='smspace' span={12}> </GridItem>
            <GridItem span={12}> Visual Arts, Sports, Music </GridItem>
            <GridItem className='space' span={12}> </GridItem>
            </Grid>
            </div>
        )
    }
}