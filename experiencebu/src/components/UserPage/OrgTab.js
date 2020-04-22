import React from 'react';
import './tab.css';
import { Grid, GridItem } from '@patternfly/react-core';
import Switch from 'react-switch';
import logo from './logo.png';

export default class OrgTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          checked: true
        };
        this.handleChange = checked => {
          this.setState({ checked });
        };
      }
    
    render() {
        const { isChecked } = this.state;
        return (
            <div className='itme'>
            <Grid>
                <GridItem className='space' span={12}> </GridItem>
                <GridItem span={6}></GridItem>
                <GridItem span={2}> SAVED </GridItem>
                <GridItem span={2}> NOTIFICATIONS </GridItem>
                <GridItem span={2}></GridItem>

                <GridItem className='smspace' span={12}> </GridItem>
                <GridItem span={1}> <img className='clubpic' src={logo}/></GridItem>
                <GridItem className='clubtabname' span={5}> CLUB NAME </GridItem>
                <GridItem span={1}> 
                <Switch className='swit' id='switch1' onChange={this.handleChange} checked={this.state.checked} 
                        handleDiameter={24} height={20} onColor={'#4cb5ab'} onHandleColor={'#009688'}/>
                </GridItem>
                <GridItem span={1}> </GridItem>
                <GridItem span={1}> 
                <Switch className='swit' id='switch2' onChange={this.handleChange} checked={this.state.checked} 
                        handleDiameter={24} height={20} onColor={'#4cb5ab'} onHandleColor={'#009688'}/>
                </GridItem>
                
                <GridItem className='smspace' span={12}> </GridItem>
                <GridItem span={1}> <img className='clubpic' src={logo}/></GridItem>
                <GridItem className='clubtabname' span={5}> CLUB NAME </GridItem>
                <GridItem span={1}> 
                <Switch className='swit' id='switch3' onChange={this.handleChange} checked={this.state.checked} 
                        handleDiameter={24} height={20} onColor={'#4cb5ab'} onHandleColor={'#009688'}/>
                </GridItem>
                <GridItem span={1}> </GridItem>
                <GridItem span={1}> 
                <Switch className='swit' id='switch4' onChange={this.handleChange} checked={this.state.checked} 
                        handleDiameter={24} height={20} onColor={'#4cb5ab'} onHandleColor={'#009688'}/>
                </GridItem>
                
                <GridItem className='smspace' span={12}> </GridItem>
                <GridItem span={1}> <img className='clubpic' src={logo}/></GridItem>
                <GridItem className='clubtabname' span={5}> CLUB NAME </GridItem>
                <GridItem span={1}> 
                <Switch className='swit' id='switch5' onChange={this.handleChange} checked={this.state.checked} 
                        handleDiameter={24} height={20} onColor={'#4cb5ab'} onHandleColor={'#009688'}/>
                </GridItem>
                <GridItem span={1}> </GridItem>
                <GridItem span={1}> 
                <Switch className='swit' id='switch6' onChange={this.handleChange} checked={this.state.checked} 
                        handleDiameter={24} height={20} onColor={'#4cb5ab'} onHandleColor={'#009688'}/>
                </GridItem>
                
                <GridItem className='space' span={12}> </GridItem>
            </Grid>
            </div>
        )
    }
}