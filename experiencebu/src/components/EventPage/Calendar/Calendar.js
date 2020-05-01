import React from 'react';
import AvailableTimes from 'react-available-times';
import _ from "lodash";
import './Calendar.css'
import { withRouter } from 'react-router-dom'


export default class Calendar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selections: [],
        events: {},
        profile: {},
        needToCall:true
      }
      this.handleChange = this.handleChange.bind(this);
      this.handlePublicEventsRequested = this.handlePublicEventsRequested.bind(this);
      this.eventTimetoDate = this.eventTimetoDate.bind(this);
      this.handleAllEvents=this.handleAllEvents.bind(this)
      this.ifNeedCallback = 0
      this.publicEvents = []
      this.privateEvents = []
      this.allEvents=[]
    }

    async componentWillMount() {
      console.log("ComponentDidMount called")
      const response = await fetch(`http://127.0.0.1:8000/api/events/`);
      const getSched = await fetch(`http://127.0.0.1:8000/api/profile/`);
      const json = await response.json();
      const json2 = await getSched.json();
      this.setState({ events: json, profile: json2 });
    }
    

    eventTimetoDate = (event) => {
      let eventTime = event.time.split(/:|-| /) //split by - and space  
      let starthour = Number(eventTime[0])
      let endhour = Number(eventTime[2])
      let startmin = Number(eventTime[1])
      let endmin = Number(eventTime[3])
      if (eventTime[4]=="PM") {starthour = starthour+12; endhour = endhour+12}
      let eventDate = event.date.split(/, | /)
      let month = 0
      if (eventDate[1] == 'January') {month = 0}
      if (eventDate[1] == 'February') {month = 1}
      if (eventDate[1] == 'March') {month = 2}
      if (eventDate[1] == 'April') {month = 3}
      if (eventDate[1] == 'May') {month = 4}
      if (eventDate[1] == 'June') {month = 5}
      if (eventDate[1] == 'July') {month = 6}
      if (eventDate[1] == 'August') {month = 7}
      if (eventDate[1] == 'September') {month = 8}
      if (eventDate[1] == 'October') {month = 9}
      if (eventDate[1] == 'November') {month = 10}
      if (eventDate[1] == 'December') {month = 11}
      let date = 0
      if (eventDate[2] == '1st') {date = 1}
      if (eventDate[2] == '2nd') {date = 2}
      if (eventDate[2] == '3rd') {date = 3}
      if (eventDate[2] == '4th') {date = 4}
      if (eventDate[2] == '5th') {date = 5}
      if (eventDate[2] == '6th') {date = 6}
      if (eventDate[2] == '7th') {date = 7}
      if (eventDate[2] == '8th') {date = 8}
      if (eventDate[2] == '9th') {date = 9}
      if (eventDate[2] == '10th') {date = 10}
      if (eventDate[2] == '11th') {date = 11}
      if (eventDate[2] == '12th') {date = 12}
      if (eventDate[2] == '13th') {date = 13}
      if (eventDate[2] == '14th') {date = 14}
      if (eventDate[2] == '15th') {date = 15}
      if (eventDate[2] == '16th') {date = 16}
      if (eventDate[2] == '17th') {date = 17}
      if (eventDate[2] == '18th') {date = 18}
      if (eventDate[2] == '19th') {date = 19}
      if (eventDate[2] == '20th') {date = 20}
      if (eventDate[2] == '21st') {date = 21}
      if (eventDate[2] == '22nd') {date = 22}
      if (eventDate[2] == '23rd') {date = 23}
      if (eventDate[2] == '24th') {date = 24}
      if (eventDate[2] == '25th') {date = 25}
      if (eventDate[2] == '26th') {date = 26}
      if (eventDate[2] == '27th') {date = 27}
      if (eventDate[2] == '28th') {date = 28}
      if (eventDate[2] == '29th') {date = 29}
      if (eventDate[2] == '30th') {date = 30}
      if (eventDate[2] == '31st') {date = 31}
      let startTime = new Date(2020,5,date,starthour,startmin,0) // Year, month, date, hour, minute, second
      let endTime = new Date(2020,5,date,endhour,endmin,0)
      return [startTime,endTime]
    }

    handleChange(selections) {
     this.setState({ selections });
    }

    async handleAllEvents(callback) {
      //await this.handlePublicEventsRequested(callback)
      //await this.handlePrivateEventsRequested(callback)
      this.handleBothEvents(callback.callback)
    }

    async handleBothEvents(callback) {
      /*
      const eventsPublic = await this.getPublicEvents();
      const eventsPrivate = await this.getPrivateEvents();
      const allEvents = _.union(eventsPublic,eventsPrivate)
        if (this.ifNeedCallback) {
         console.log("THIS SHOULD ONLY APPEAR ONCE")
         this.ifNeedCallback = false;
         callback(_.uniq(allEvents))}
      }
      */ 
      let allEvents = this.state.allEvents
      let boolean = this.ifNeedCallback > 2
      if (boolean) {
          const eventsPublic = await this.getPublicEvents();
          const eventsPrivate = await this.getPrivateEvents();
          allEvents = _.union(eventsPublic,eventsPrivate)
          callback(allEvents)
      }
      this.ifNeedCallback = this.ifNeedCallback + 1
        
      } 
        

    getPublicEvents = () => {
      let events = []
      if (!(_.isEmpty(this.state.events))){
        for (let i = 0; i < 5; i++ ) {
          let eventTime = []
          eventTime = this.eventTimetoDate(this.state.events[i])
          events.push({
            start: eventTime[0],
            end: eventTime[1],
            title: this.state.events[i].name,
            calendarId: 'public',
          });
        }
      }
      return events
  }
    getPrivateEvents = () => {
      let events = []
      if (!(_.isEmpty(this.state.profile))){
        let schedule = this.state.profile[0].schedule
        schedule = schedule.replace(/'/g, "\"")
        schedule = schedule.replace(/{|}|\[|\]/g, "")
        let schelist = schedule.split(/\"title\"\: \"/)
        let listlist = []
        for (let i = 1; i < schelist.length; i++) {
          listlist[i] = schelist[i].split(/\"start\"\: |\"end\"\: /)
        }
        for (let i = 1; i < schelist.length; i++) {
          listlist[i][0] = listlist[i][0].slice(0,-2).replace(/\"/g, "")
          listlist[i][1] = listlist[i][1].split(/,|\"dateTime\"\: /)[1].replace(/\"/g, "").split(/-|T|:/)
          listlist[i][2] = listlist[i][2].split(/,|\"dateTime\"\: /)[1].replace(/\"/g, "").split(/-|T|:/)
        }
        for (let i = 1; i < schelist.length; i++) {
          events.push({
            start: new Date(2020,5,Number(listlist[i][1][2]),Number(listlist[i][1][3]),Number(listlist[i][1][4]),0),
            end: new Date(2020,5,Number(listlist[i][1][2]),Number(listlist[i][2][3]),Number(listlist[i][1][4]),0),
            title: listlist[i][0],
            calendarId: 'private' 
          })
        }
      }
      return events
    }

   async handlePublicEventsRequested({callback}) {
      const events = await this.getPublicEvents();
      callback(events)
    }
    
    async handlePrivateEventsRequested({callback}) {
      const events = await this.getPrivateEvents();
      callback(events)
    }




    render() {
      //console.log(this.state.profile)
      const { selections, recurring } = this.state;
      const TIME_ZONE = 'America/New_York';

      /* 
        let name = ["","","","",""];
        let date = ["","","","",""];
        let time = ["","","","",""];
        name = [this.state.events[0].name,this.state.events[1].name,this.state.events[2].name,this.state.events[3].name,this.state.events[4].name];
        date = [this.state.events[0].date,this.state.events[1].date,this.state.events[2].date,this.state.events[3].date,this.state.events[4].date];
        time = [this.state.events[0].time,this.state.events[1].time,this.state.events[2].time,this.state.events[3].time,this.state.events[4].time];
      */
      return (
        <div className='calwrapper'>
        <AvailableTimes
          className='rat-TimeSlot_component'
          timeConvention="24h"
          weekStartsOn="monday"
          calendars={[
            {
              id: 'public',
              title: 'public',
              foregroundColor: '#ff00ff',
              backgroundColor: '#f0f0f0',
              selected: true
            },
            {
              id: 'private',
              title: 'private',
              foregroundColor: '#666',
              backgroundColor: '#f3f3f3',
              selected: true
            },
          ]}
          onChange={this.handleChange}
          onEventsRequested={this.handleAllEvents}
          height={800}
          recurring={false}
          availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
          availableHourRange={{ start: 8, end: 22 }}
  /* onChange={(selections) => {
    selections.forEach(({ start, end }) => {
      console.log('Start:', start, 'End:', end);
    })
  }} */
  
  //array of objects, where each object has a start and an end date, plus a title property.
  
  /*
   onEventsRequested={({ calendarId, start, end, callback }) => {
    loadMoreEvents(calendarId, start, end).then(callback);
  }}
  initialSelections={[
    { start: 'monday', end: 'friday' }
  ]} 
  */ 
          /></div>
        )
    }
}

