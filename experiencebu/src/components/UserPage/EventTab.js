import React from 'react';
import './tab.css';
import { Grid, GridItem, Card, CardHeader, CardBody } from '@patternfly/react-core';
import _ from "lodash";
import EventCard from '../EventPage/EventCard'


export default class EventTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            events: {}
        };
    }

    async componentWillMount() {
        const response = await fetch(`http://127.0.0.1:8000/api/events/`);
        const response2 = await fetch(`http://127.0.0.1:8000/api/profile/`);
        const json = await response.json();
        const json2 = await response2.json();
        this.setState({ events: json, user: json2 });
      }

    render() {
        let allEvents= []
        if (!_.isEmpty(this.state.user) && !_.isEmpty(this.state.events)) {
            allEvents = this.state.events.slice(0, 5).map(event => {
                if (!_.isEmpty(_.intersection(this.state.user[0].events,[event.id]))){
                  return <GridItem span={12}>
                            <EventCard props={event}> </EventCard>
                         </GridItem>;
                }
              })
        }
        return (
            <div className='itevent'>
            <Grid>
                <GridItem className='space' span={12}> </GridItem>
                <GridItem className='eventtabname' span={12}> UPCOMING EVENTS </GridItem>
                <GridItem className='smspace' span={12}> </GridItem>
                {allEvents}
                <GridItem className='space' span={12}> </GridItem>
            </Grid>
            </div>
        )
    }
}