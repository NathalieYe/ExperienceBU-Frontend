import React from 'react';
import {
  Nav,
  NavExpandable,
  NavItem,
  NavItemSeparator,
  NavList,
  NavGroup,
  NavVariants,
  Text
} from '@patternfly/react-core';
import "./footer.css"

export default class NavTertiaryList extends React.Component {
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

  render() {
    const { activeItem } = this.state;
    return (
    <div style={{ backgroundColor: 'rgb(29, 28, 20)' }}>
      <Nav onSelect={this.onSelect}>
        <div className='pf-c-page__footer-nav'>
        <NavList variant={NavVariants.tertiary}>
         <NavItem></NavItem>
         <Text className='school'> Boston University </Text>
         <Text className='spark'> SPARK! Innovation Fellowship Project Spring 2020 </Text>
         <Text className='teamname'> By Team EmptyIdleness </Text>
        </NavList>
        </div>
      </Nav>
   </div>
    );
  }
}

