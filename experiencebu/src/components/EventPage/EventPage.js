import React from 'react';
import './EventPage.css';
import Calendar from './Calendar/Calendar.js';
//import Calendar from './Calendar/test_calendar.js';
import {Nav, Text, Page,Header,PageSection,PageSidebar, Flex, FlexItem, FlexModifiers, Card, CardHeader, CardBody 
} from '@patternfly/react-core';
import Bar from "../SearchBar/SearchBar.js"
import Tags from "../Tags/Tags.js"
import EventCard from "./EventCard.js"
import _ from "lodash"
import {
  Link
} from "react-router-dom";

export default class EventPage extends React.Component {
  constructor(props) {
    super(props);
    this.backUrl = '/eventInfoPage'
    
    this.state = {
      events: {},
      isNavOpen: true
    };
    this.onNavToggle = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    };
  }

  async componentWillMount() {
    const response = await fetch(`http://127.0.0.1:8000/api/events/`);
    const json = await response.json();
    this.setState({ events: json });
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
      let name = ["","",""];
      let date = ["","",""];
      let time = ["","",""];
      let location = ["","",""];
      let club = ["","",""];
      let id = ["","",""]
      if (_.isEmpty(this.state.events) !== true){
        name = [this.state.events[0].name,this.state.events[1].name,this.state.events[2].name];
        date = [this.state.events[0].date,this.state.events[1].date,this.state.events[2].date];
        time = [this.state.events[0].time,this.state.events[1].time,this.state.events[2].time];
        location = [this.state.events[0].location,this.state.events[1].location,this.state.events[2].location];
        club = [this.state.events[0].affiliation,this.state.events[1].affiliation,this.state.events[2].affiliation];
        id = [this.state.events[0].id.toString(),this.state.events[1].id.toString(),this.state.events[2].id.toString()];
    

      return (
          <Page className='page' header={Header} sidebar={Sidebar} children={Bar}>
          
          <PageSection style={{height: '20em'}}>
            
            <Text className='headert'>Events Recommended For You</Text>
                <Flex className='contain' breakpointMods={[{modifier: FlexModifiers["justify-content-space-between"]}]}>
                <FlexItem>
                <Link to={{
                  pathname: `/eventInfoPage/0`,
                  aboutProps:{
                    name: "0"
                  }}}> 
                  <Card className='card'> 
                      <CardHeader className='eventit'> {name[0]} </CardHeader>
                      <CardBody> {time[0]}, {date[0]} </CardBody>
                      <CardBody> {location[0]} </CardBody>
                      <CardBody> {club[0]} </CardBody>
                  </Card>    
                  </Link>     
                  </FlexItem>
                  <Link to={`/eventInfoPage/${id[1]}`}> 
                  <FlexItem>
                  <Card className='card'> 
                      <CardHeader className='eventit'> {name[1]} </CardHeader>
                      <CardBody> {time[1]}, {date[1]} </CardBody>
                      <CardBody> {location[1]} </CardBody>
                      <CardBody> {club[1]} </CardBody>
                  </Card> 
                  </FlexItem>
                  </Link>
                  <FlexItem>
                  {console.log(id[2])}
                  <Link to={`/eventInfoPage/${id[2]}`}> 
                  <Card className='card'> 
                      <CardHeader className='eventit'> {name[2]} </CardHeader>
                      <CardBody> {time[2]}, {date[2]} </CardBody>
                      <CardBody> {location[2]} </CardBody>
                      <CardBody> {club[2]} </CardBody>
                  </Card>     
                  </Link>         
                  </FlexItem>
                </Flex>

            <Text className='headert'> Event Calendar </Text>
            <Calendar></Calendar>

            <Text className='headert'> Event Results (2) </Text>
            <EventCard></EventCard>
            <EventCard></EventCard>

        </PageSection>
          </Page>
          
        ); 
      }
  return ( <div> "Loading" </div>
    )
    }
}
    
