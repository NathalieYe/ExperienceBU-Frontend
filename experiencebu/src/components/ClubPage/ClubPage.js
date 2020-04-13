import React from 'react';
import './ClubPage.css';
import {Nav, Text, Page,Header,PageSection,PageSidebar, Grid, GridItem } from '@patternfly/react-core';
import Bar from "../SearchBar/SearchBar.js"
import Tags from "../Tags/Tags.js"
import Card from "../ClubCard/ClubCard.js"

export default class ClubPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true
    };
    this.onNavToggle = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    };
  }

    render() {
      const { isNavOpen } = this.state;
      const PageNav = (
      <div> 
        <Bar></Bar>
        <Tags></Tags>
      </div>
      )
    
      const Sidebar = <PageSidebar  nav={PageNav} isNavOpen={isNavOpen} theme="light" />;
    
      return (
          <Page header={Header} sidebar={Sidebar} children={Bar} >
          
          <PageSection style={{height: '10em'}}>
            
            <Text className='headert'>Recommended For You</Text>

            <Grid>
              <GridItem span={1}></GridItem>
              <GridItem span={3}>
                 <Card></Card>
              </GridItem>
              <GridItem span={3}>
                 <Card></Card>
              </GridItem>
              <GridItem span={3}>
                 <Card></Card>
              </GridItem>
            </Grid>

        </PageSection>
          </Page>
          
        ); 
      
    }
}
    
