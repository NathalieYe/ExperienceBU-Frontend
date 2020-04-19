import React from 'react';
import AvailableTimes from 'react-available-times';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AvailableTimes
  weekStartsOn="monday"
  calendars={[
    {
      id: 'work',
      title: 'Work',
      foregroundColor: '#ff00ff',
      backgroundColor: '#f0f0f0',
      selected: true,
    },
    {
      id: 'private',
      title: 'My private cal',
      foregroundColor: '#666',
      backgroundColor: '#f3f3f3',
    },
  ]}
  onChange={(selections) => {
    selections.forEach(({ start, end }) => {
      console.log('Start:', start, 'End:', end);
    })
  }}
  /* 
  onEventsRequested={({ calendarId, start, end, callback }) => {
    loadMoreEvents(calendarId, start, end).then(callback);
  }}
  initialSelections={[
    { start: 'monday', end: 'friday' }
  ]} 
  */
  height={600}
  recurring={false}
  availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
  availableHourRange={{ start: 9, end: 19 }}
/>
        )
    }
}

