import React from 'react';
import './EventPage.css';
import Calendar from './Calendar.js';
import {Nav, Text, Page,Header,PageSection,PageSidebar, Flex, FlexItem, FlexModifiers, Card, CardHeader, CardBody 
} from '@patternfly/react-core';
import Bar from "../SearchBar/SearchBar.js"
import Tags from "../Tags/Tags.js"

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
      <Nav className='sidebar'>
        <Bar></Bar>
        <Tags></Tags>
      </Nav>
      )
    
      const Sidebar = <PageSidebar  nav={PageNav} isNavOpen={isNavOpen}/>;
    
      return (
          <Page className='page' header={Header} sidebar={Sidebar} children={Bar}>
          
          <PageSection style={{height: '20em'}}>
            
            <Text className='headert'>Events Recommended For You</Text>
                <Flex className='contain' breakpointMods={[{modifier: FlexModifiers["justify-content-space-between"]}]}>
                <FlexItem>
                  <Card className='card'> 
                      <CardHeader className='eventit'> Event Name </CardHeader>
                      <CardBody> Time </CardBody>
                      <CardBody> Location </CardBody>
                      <CardBody> Affiliated Club </CardBody>
                  </Card>            
                  </FlexItem>
                  <FlexItem>
                  <Card className='card'> 
                      <CardHeader className='eventit'> Event Name </CardHeader>
                      <CardBody> Time </CardBody>
                      <CardBody> Location </CardBody>
                      <CardBody> Affiliated Club </CardBody>
                  </Card> 
                  </FlexItem>
                  <FlexItem>
                  <Card className='card'> 
                      <CardHeader className='eventit'> Event Name </CardHeader>
                      <CardBody> Time </CardBody>
                      <CardBody> Location </CardBody>
                      <CardBody> Affiliated Club </CardBody>
                  </Card>              
                  </FlexItem>
                </Flex>

            <Text className='headert'> Event Calendar </Text>
            <Calendar></Calendar>

            <Text className='headert'> Event Results (2) </Text>
            <Card className='resultcard'> 
                <CardHeader className='eventit'> Event Name </CardHeader>
                <CardBody> Time </CardBody>
                <CardBody> Location </CardBody>
                <CardBody> Affiliated Club </CardBody>    
                <CardBody className='descr'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </CardBody>
            </Card>
            <Card className='resultcard'> 
                <CardHeader className='eventit'> Event Name </CardHeader>
                <CardBody> Time </CardBody>
                <CardBody> Location </CardBody>
                <CardBody> Affiliated Club </CardBody>    
                <CardBody className='descr'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </CardBody>
            </Card>

        </PageSection>
          </Page>
          
        ); 
      
    }
}
    
