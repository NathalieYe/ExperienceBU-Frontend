import React from 'react';
import AvailableTimes from 'react-available-times';
import _ from "lodash"

export default class Calendar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selections: [],
        events: {},
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleEventsRequested = this.handleEventsRequested.bind(this);
      this.eventTimetoDate = this.eventTimetoDate.bind(this);
    }

    async componentWillMount() {
      console.log("ComponentDidMount called")
      const response = await fetch(`http://127.0.0.1:8000/api/events/`);
      const json = await response.json();
      this.setState({ events: json }, () => console.log(this.state.events));
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
      console.log(startTime, "JASNDLKAJSN", endTime)
      return [startTime,endTime]
    }

    handleChange(selections) {
      this.setState({ selections });
    }

    handleEventsRequested({ start: s, end: e, calendarId, callback }) {
      console.log("do we even get here?")
      let events = [];
      console.log("LOOK HERE")
      console.log(!(_.isEmpty(this.state.events)))
      if (!(_.isEmpty(this.state.events))){
        console.log("do we even get here part 2?")
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
    //  const latency = this.state.date_object;
        console.log(events)
        callback(events)
    //console.log(`Simulated latency for ${calendarId}`, latency);
    /*setTimeout(() => {
      callback(events);
    }, latency); */

    }

    render() {
      const { selections, recurring } = this.state;
      {console.log("do we even get here part 3?")}
      const TIME_ZONE = 'America/New_York';
      const calendars = [
        {
          id: 'public',
          title: 'Event Schedule',
          foregroundColor: '#ff00ff',
          backgroundColor: '#f0f0f0',
          selected: true
        },
        {
          id: 'private',
          title: 'My Schedule',
          foregroundColor: '#666',
          backgroundColor: '#f3f3f3',
        },
      ]
      /* 
        let name = ["","","","",""];
        let date = ["","","","",""];
        let time = ["","","","",""];
        name = [this.state.events[0].name,this.state.events[1].name,this.state.events[2].name,this.state.events[3].name,this.state.events[4].name];
        date = [this.state.events[0].date,this.state.events[1].date,this.state.events[2].date,this.state.events[3].date,this.state.events[4].date];
        time = [this.state.events[0].time,this.state.events[1].time,this.state.events[2].time,this.state.events[3].time,this.state.events[4].time];
      */
      return (
        <AvailableTimes
          timeConvention="24h"
          timeZone={TIME_ZONE}
          weekStartsOn="monday"
          calendars={calendars}
          onChange={this.handleChange}
          onEventsRequested={this.handleEventsRequested}
          height={600}
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
          />
        )
    }
}

