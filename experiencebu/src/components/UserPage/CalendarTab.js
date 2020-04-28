import React from 'react';
import './tab.css';
import { Grid, GridItem} from '@patternfly/react-core';
import Calendar from '../EventPage/Calendar/Calendar.js';

export default class CalendarTab extends React.Component {
    render() {
        return (
            <div className='itme'> 
                <Grid>
                    <GridItem className='space' span={12}> </GridItem>
                    <GridItem span={12}> <Calendar></Calendar> </GridItem>
                    <GridItem className='space' span={12}> </GridItem>
                </Grid>   
            </div>
            
        )
    }
}