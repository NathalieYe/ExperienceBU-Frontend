import React from 'react';
import './UserPage.css';
import { Tabs, Tab, TabsVariant, TabContent } from '@patternfly/react-core';
import ProfileTab from './ProfileTab';
import CalendarTab from './CalendarTab';
import EventTab from './EventTab';
import OrgTab from './OrgTab';

export default class ClubInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabKey: 0
    };
    // Toggle currently active tab
    this.handleTabClick = (event, tabIndex) => {
      this.setState({
        activeTabKey: tabIndex
      });
    };
  }

  render() {
    return (
      <Tabs className='pf-c-tabs' activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
        <Tab className='spacetab'></Tab>
        <Tab className='atab' eventKey={0} title="PROFILE">
          <ProfileTab></ProfileTab>
        </Tab>
        {/*<Tab className='atab' eventKey={1} title="CALENDAR">
          <CalendarTab></CalendarTab>
    </Tab> */}
        <Tab className='atab' eventKey={1} title="MY EVENTS">
          <EventTab></EventTab>
        </Tab>
        <Tab className='atab' eventKey={2} title="MY ORGANIZATIONS">
          <OrgTab></OrgTab>
        </Tab>
      </Tabs>
    );
  }
}