import React from 'react';
import {
  Nav,
  NavExpandable,
  NavItem,
  NavItemSeparator,
  NavList,
  NavGroup,
  NavVariants,
  PageHeader,
  Text
} from '@patternfly/react-core';
import "./MastHead.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class NavHorizontalList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }
  // ExperienceBU HOME EVENTS ORGANIZATIONS  Log In
  render() {
    const { activeItem } = this.state;
    const nav = (
      <Nav onSelect={this.onSelect}>
        <div className='pf-c-page__header-nav'>
        <NavList  variant={NavVariants.horizontal} > 
          <Text className='title'> Experience </Text>
          <Text className='BU'> BU </Text>
          <NavItem></NavItem>
          <NavItem className='home'>
            <Link to="/">
             HOME 
             </Link>
          </NavItem>
          <NavItem className='events'> EVENTS </NavItem>
          <NavItem className='organizations'> 
            <Link to="/clubPage"> 
            ORGANIZATIONS 
            </Link>
          </NavItem>
          <NavItem className='username'> Log In </NavItem>
        </NavList>
        </div>
      </Nav>
    );
    return (
      <PageHeader topNav={nav} style={{ backgroundColor: 'rgb(29, 28, 20)' }} />
    );
  }
}

export default NavHorizontalList
