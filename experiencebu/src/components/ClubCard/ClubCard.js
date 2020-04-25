import React from 'react';
import './ClubCard.css'; 
import { Card, CardHead, CardHeader } from '@patternfly/react-core';
import {
    Link
  } from "react-router-dom";
import logo from './bulog.png'


export default class ClubCard extends React.Component {
    
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
        console.log(this.props)
        if (this.props !== undefined && this.props.props !== undefined) { this.club = this.props.props; }

    return (
        <Link to={`/clubInfoPage/${this.club.name}`}> 
        <Card>
            {console.log("ClubCard is called")}
            <div className='item'>
            <CardHead>
            <img src={logo} className='img' style={{ height: '18vw' }}/>
            </CardHead> 
            <CardHeader className='caption'> {this.club.name} </CardHeader>
            </div>
        </Card>
        </Link>
    );
}
}

