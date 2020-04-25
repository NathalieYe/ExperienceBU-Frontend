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
import logo from './logo.png';
import { GoogleLogin } from 'react-google-login';


class NavHorizontalList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      activeItem: 0
    };
    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }
  render() {
    const responseGoogle = (response) => {
      console.log(response);
    }
    const login = (
      <GoogleLogin
      clientId="545236115133-92efvfr2i30dc8n3701jsoh4b7h7ftj3.apps.googleusercontent.com"
      render={renderProps => (
        <button className='loginbutton' onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
      )}  
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      />
    );
    const { activeItem } = this.state;
    const nav = (
      <Nav onSelect={this.onSelect}>
        <div className='pf-c-page__header-nav'>
        <NavList  variant={NavVariants.horizontal} > 
          <img src={logo} className='logo'/>
          <Text className='title'> EXPERIENCE_ </Text>
          <Text className='BU'> BU </Text>
          <Text className='phrase'> Find the right events and organizations based on your schedule</Text>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem className='home'>
            <Link to="/">
             HOME 
             </Link>
          </NavItem>
          <NavItem className='events'> 
            <Link to="/eventPage"> 
            EVENTS
            </Link> 
          </NavItem>
          <NavItem className='organizations'> 
            <Link to="/clubPage"> 
            ORGANIZATIONS 
            </Link>
          </NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem></NavItem>
          <NavItem className='username'> 
            {login}
            {document.getElementById('googleButton')}
          </NavItem>
        </NavList>
        </div>
      </Nav>
    );
    return (
      <PageHeader topNav={nav} style={{ backgroundColor: 'rgb(255,255,255)' }} />
    );
  }
}

export default NavHorizontalList
