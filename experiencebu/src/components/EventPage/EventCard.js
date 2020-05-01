import React from 'react';
import './EventPage.css';
import {Card, CardHeader, CardBody 
} from '@patternfly/react-core';
import {
    Link
  } from "react-router-dom";

export default class EventCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            event: {}
        }
        
    }

    async componentWillMount() {
        this.setState({ event: this.props.props });
    }

    render() {
        if (this.props !== undefined && this.props.props !== undefined) { this.event = this.props.props; }
        return (
            <Card className='resultcard'> 
                <Link to={{
                      pathname: `/eventInfoPage/${this.event.id}`
                }}>
                <CardHeader className='eventit'> 
                {this.event.name} 
                </CardHeader>
                <CardBody className='blackfont'> {this.event.time}, {this.event.date} </CardBody>
                <CardBody className='blackfont'> {this.event.location} </CardBody>
                <CardBody className='blackfont'> {this.event.club} </CardBody>    
                </Link>
                <CardBody className='descr'> {this.event.description} </CardBody>
            </Card>
        )
    }
}