import React from 'react';
import './tab.css';
import { Grid, GridItem } from '@patternfly/react-core';
import Switch from 'react-switch';
import logo from './logo.png';
import ClubSave from './ClubSave.js'
import _ from "lodash"

export default class OrgTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          checked: true,
          clubs: {},
          user: {}
        };
        this.handleChange = checked => {
          this.setState({ checked });
        };
      }
    
      async componentWillMount() {
        const response = await fetch(`http://127.0.0.1:8000/api/organizations/`);
        const response2 = await fetch(`http://127.0.0.1:8000/api/profile/`);
        const json = await response.json();
        const json2 = await response2.json();
        this.setState({ clubs: json, user: json2 });
      }

    
    checkClubs = (club) => {
      let boolean = this.state.user[0].subscriptions.includes(club.id)
      console.log(boolean)
      console.log("LOOK AT ME PLEASE")
      return boolean
  }

    render() {
        const { isChecked } = this.state;
        let usersClubs = []
        if (!_.isEmpty(this.state.clubs)) {
        console.log(this.state.clubs)
        usersClubs = this.state.clubs.map(club => {
            if (this.checkClubs(club)) {
              return <ClubSave props={club}> </ClubSave>
        }
          })
        }
        
        return (
            <div className='itme'>
            <Grid>
                <GridItem className='space' span={12}> </GridItem>
                <GridItem span={6}></GridItem>
                <GridItem span={2}> SAVED </GridItem>
                <GridItem span={2}> NOTIFICATIONS </GridItem>
                <GridItem span={2}></GridItem>
                {usersClubs}
                <GridItem className='space' span={12}> </GridItem>
            </Grid>
            </div>
        )
    }
}