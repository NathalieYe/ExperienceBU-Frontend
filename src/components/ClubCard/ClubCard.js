import React from 'react';
import './ClubCard.css'; 
import { Card, CardHead, CardHeader } from '@patternfly/react-core';
import logo from './bulog.png'


export default class ClubCard extends React.Component {
    render() {
    return (
        <Card>
            <div className='item'>
            <CardHead>
            <img src={logo} className='img' style={{ height: '18vw' }}/>
            </CardHead> 
            <CardHeader className='caption'>ClubName</CardHeader>
            </div>
        </Card>
    );
}
}

