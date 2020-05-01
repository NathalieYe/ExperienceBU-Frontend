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
  Link, withRouter
} from "react-router-dom";

class EventPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.backUrl = '/eventInfoPage'
    
    this.state = {
      events: {},
      isNavOpen: true,
      tags: [],
      showNumEvents: 5
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
  


  changeTags = (boolean, newTags) => {
    let currentTags = this.state.tags
    if (boolean){
      //let newTagList = _.union(currentTags,[newTags])
      currentTags = _.union(currentTags,[newTags])
      if (newTags == "Performance Arts") {
        currentTags = _.union(currentTags,["Dance","Music","Theatre"])
      }
      if (newTags == "Academic & Professional") {
        currentTags = _.union(currentTags,["Business","CAS Subjects","Engineering", "Law", "Technological", "Others"])
      }
      this.setState({tags: currentTags});
    }
    else{
      //let newTagList = _.without(currentTags, newTags)
      currentTags = _.without(currentTags, newTags)
      if (newTags == "Academic & Professional") {
        currentTags = _.without(currentTags,"Business")
        currentTags = _.without(currentTags,"CAS Subjects")
        currentTags = _.without(currentTags,"Engineering")
        currentTags = _.without(currentTags,"Law")
        currentTags = _.without(currentTags,"Technological")
        currentTags = _.without(currentTags,"Others")
      }
      if (
        (_.isEmpty(_.intersection(currentTags,["Business"]))) ||
        (_.isEmpty(_.intersection(currentTags,["CAS Subjects"]))) ||
        (_.isEmpty(_.intersection(currentTags,["Engineering"]))) ||
        (_.isEmpty(_.intersection(currentTags,["Law"]))) ||
        (_.isEmpty(_.intersection(currentTags,["Technological"]))) ||
        (_.isEmpty(_.intersection(currentTags,["Others"]))) ||
        (_.isEmpty(_.intersection(currentTags,["Business","CAS Subjects","Engineering", "Law", "Technological", "Others"])))
      ) {
        currentTags = _.without(currentTags,"Academic & Professional")
      }
      if (newTags == "Performance Arts") {
        currentTags = _.without(currentTags,"Theatre")
        currentTags = _.without(currentTags,"Music")
        currentTags = _.without(currentTags,"Dance")
      }
      if (
        (_.isEmpty(_.intersection(currentTags,["Dance","Music","Theatre"]))) ||
        (_.isEmpty(_.intersection(currentTags,["Dance"]))) ||
        (_.isEmpty(_.intersection(currentTags,["Music"]))) ||
        (_.isEmpty(_.intersection(currentTags,["Theatre"])))
      ){
        currentTags = _.without(currentTags,"Performance Arts")
      }
      this.setState({tags: currentTags})
    }
  }

  checkTags = (event) => {
    let eventTagArray = event.tags.split(/, | - /)
    let hasIntersection = _.intersection(eventTagArray, this.state.tags)
    let boolean = _.isEmpty(hasIntersection)
    return !boolean
  }

  /*
  getLength = (allEvents) => {
    let count = 0
    for()
  }
*/

    render() {
      const { isNavOpen } = this.state;
      const PageNav = (
      <Nav className='sidebarrr'>
        <Bar></Bar>
        <Tags action={this.changeTags}></Tags>
      </Nav>
      )
      const Sidebar = <PageSidebar  nav={PageNav} isNavOpen={isNavOpen}/>;
      let name = ["","",""];
      let date = ["","",""];
      let time = ["","",""];
      let location = ["","",""];
      let club = ["","",""];
      let id = ["","",""]
      let allEvents= []
      let numEvents = 0;
      
       if (!_.isEmpty(this.state.events)) {
        name = [this.state.events[0].name,this.state.events[1].name,this.state.events[2].name];
        date = [this.state.events[0].date,this.state.events[1].date,this.state.events[2].date];
        time = [this.state.events[0].time,this.state.events[1].time,this.state.events[2].time];
        location = [this.state.events[0].location,this.state.events[1].location,this.state.events[2].location];
        club = [this.state.events[0].affiliation,this.state.events[1].affiliation,this.state.events[2].affiliation];
        id = [this.state.events[0].id.toString(),this.state.events[1].id.toString(),this.state.events[2].id.toString()];
        
        if (_.isEmpty(this.state.tags) !== true) {
          allEvents = this.state.events.slice(0, this.state.showNumEvents).sort(function (x, y) {
            let a = x.name.toUpperCase(),
                b = y.name.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
        }).map(event => {
            if (this.checkTags(event)){
              return <FlexItem className='spaceleft'>  <EventCard props={event}> </EventCard> </FlexItem>;
            }
          })
         numEvents =_.pickBy( allEvents, _.identity)
        }
        else {
            allEvents = this.state.events.slice(0, this.state.showNumEvents).sort(function (x, y) {
              let a = x.name.toUpperCase(),
                  b = y.name.toUpperCase();
              return a == b ? 0 : a > b ? 1 : -1;
          }).map(event => {
              return <FlexItem className='spaceleft'>  <EventCard props={event}> </EventCard> </FlexItem>;
        })
        numEvents =_.pickBy( allEvents, _.identity)
      }
      
      return (
          <Page className='page' header={Header} sidebar={Sidebar} children={Bar}>
          
          <PageSection style={{height: '20em'}}>
            <Text className='headert'>Events Recommended For You</Text>
                <Flex className='contain' breakpointMods={[{modifier: FlexModifiers["justify-content-space-between"]}]}>
                  <Link to={{
                      pathname: '/eventInfoPage/' + id[0]
                        }}>
                  <FlexItem>
                  <Card className='card'> 
                      <CardHeader className='eventit'> {name[0]} </CardHeader>
                      <CardBody> {time[0]}, {date[0]} </CardBody>
                      <CardBody> {location[0]} </CardBody>
                      <CardBody> {club[0]} </CardBody>
                  </Card> 
                  </FlexItem>
                  </Link>
                  <Link to={{
                      pathname: '/eventInfoPage/' + id[1],
                      state: {
                          fromNotifications: true
                            }
                        }}>
                  <FlexItem>
                  <Card className='card'> 
                      <CardHeader className='eventit'> {name[1]} </CardHeader>
                      <CardBody> {time[1]}, {date[1]} </CardBody>
                      <CardBody> {location[1]} </CardBody>
                      <CardBody> {club[1]} </CardBody>
                  </Card> 
                  </FlexItem>
                  </Link>
                  <Link to={{
                      pathname: '/eventInfoPage/' + id[2],
                      state: {
                          fromNotifications: true
                            }
                        }}>
                  <FlexItem>
                  <Card className='card'> 
                      <CardHeader className='eventit'> {name[2]} </CardHeader>
                      <CardBody> {time[2]}, {date[2]} </CardBody>
                      <CardBody> {location[2]} </CardBody>
                      <CardBody> {club[2]} </CardBody>
                  </Card> 
                  </FlexItem>
                  </Link>
                </Flex>

            <Text className='headert'> Event Calendar </Text>
            <Calendar></Calendar>

            <Text className='headert'> {`Events Results (${Object.keys(numEvents).length})`} </Text>
            {allEvents}

        </PageSection>
          </Page>
          
        ); 
      }
  return ( <div> </div>
    )
    }
}
    

export default withRouter(EventPage);

