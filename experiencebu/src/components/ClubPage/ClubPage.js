import React from 'react';
import './ClubPage.css';
import {Nav, Text, Page,Header,PageSection,PageSidebar, Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';
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
      <div className='sidebar'> 
        <Bar></Bar>
        <Tags></Tags>
      </div>
      )
    
      const Sidebar = <PageSidebar  nav={PageNav} isNavOpen={isNavOpen}/>;
    
      return (
          <Page className='page' header={Header} sidebar={Sidebar} children={Bar}>
          
          <PageSection style={{height: '20em'}}>
            
            <Text className='headert'>Recommended For You</Text>
                <Flex breakpointMods={[{modifier: FlexModifiers["justify-content-space-between"]}]}>
                <FlexItem>
                  <Card></Card>              
                  </FlexItem>
                  <FlexItem>
                  <Card></Card>              
                  </FlexItem>
                  <FlexItem>
                  <Card></Card>              
                  </FlexItem>
                </Flex>

            <Text className='headert'>All Clubs and Organization</Text>
            <Flex breakpointMods={[{modifier: FlexModifiers.column}]}>
            <Flex breakpointMods={[{modifier: FlexModifiers["justify-content-space-between"]}]}>
                <FlexItem>
                  <Card></Card>              
                  </FlexItem>
                <FlexItem>
                  <Card></Card>              
                </FlexItem>
                <FlexItem>
                  <Card></Card>              
                </FlexItem>
            </Flex>
            <Flex breakpointMods={[{modifier: FlexModifiers["justify-content-space-between"]}]}>
                <FlexItem>
                  <Card></Card>              
                </FlexItem>
                <FlexItem>
                  <Card></Card>              
                </FlexItem>
                <FlexItem>
                  <Card></Card>              
                </FlexItem>
            </Flex>
            </Flex>

        </PageSection>
          </Page>
          
        ); 
      
    }
}
    
