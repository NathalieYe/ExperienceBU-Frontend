import React from 'react';
import './ClubCard.css'; 
import { Card, CardHead, CardHeader } from '@patternfly/react-core';
import club1 from './vsa.png'
import logo from './logoo.jpg'


export default class ClubCard extends React.Component {
    render() {
    return (
        <Card>
            <div className='item'>
            <CardHead>
            <img src={logo} className='img' style={{ height: '15vw' }}/>
            </CardHead> 
            <CardHeader className='caption'>VSA</CardHeader>
            </div>
        </Card>
    );
}
}

