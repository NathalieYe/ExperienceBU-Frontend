import React from 'react';
import './EventPage.css';
import {Card, CardHeader, CardBody 
} from '@patternfly/react-core';

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
                <CardHeader className='eventit'> Event Name </CardHeader>
                <CardBody> Time </CardBody>
                <CardBody> Location </CardBody>
                <CardBody> Affiliated Club </CardBody>    
                <CardBody className='descr'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </CardBody>
            </Card>
        )
    }
}