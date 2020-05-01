import React from 'react';
import './ClubCard.css'; 
import { Card, CardHead, CardHeader } from '@patternfly/react-core';
import {
    Link
  } from "react-router-dom";
import logo from './bulog.png'


export default class RecCard extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            club: {}
        }
        
    }


    async componentWillMount() {
        this.setState({ club: this.props.props });
        /* const response = await fetch(`http://localhost:5000/clubs`);
        const json = await response.json();
        this.setState({ club: json }); */
    }

    render() {
        if (this.props !== undefined && this.props.props !== undefined) { this.club = this.props.props; }

    return (
        <Link to={`/eventInfoPage/${id[0]}`}> 
        <Card className='card'> 
    <CardHeader className='eventit'> {name[0]} </CardHeader>
    <CardBody> {time[0]}, {date[0]} </CardBody>
    <CardBody> {location[0]} </CardBody>
    <CardBody> {club[0]} </CardBody>
</Card>    
</Link>     
    );
}
}




