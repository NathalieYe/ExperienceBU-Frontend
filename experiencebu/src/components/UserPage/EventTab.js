import React from 'react';
import './tab.css';
import { Grid, GridItem, Card, CardHeader, CardBody } from '@patternfly/react-core';
import EventCard from '../EventPage/EventCard'


export default class EventTab extends React.Component {
    render() {
        return (
            <div className='itevent'>
            <Grid>
                <GridItem className='space' span={12}> </GridItem>
                <GridItem className='eventtabname' span={12}> UPCOMING EVENTS </GridItem>
                <GridItem className='smspace' span={12}> </GridItem>
                <GridItem span={12}>
                    <EventCard></EventCard>
                </GridItem>
                <GridItem span={12}>
                    <EventCard></EventCard>
                </GridItem>
                <GridItem className='space' span={12}> </GridItem>
            </Grid>
            </div>
        )
    }
}