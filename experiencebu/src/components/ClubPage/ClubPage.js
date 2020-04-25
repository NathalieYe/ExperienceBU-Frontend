import React from 'react';
import './ClubPage.css';
import {Nav, Text, Page,Header,PageSection,PageSidebar, Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';
import Bar from "../SearchBar/SearchBar.js"
import Tags from "../Tags/Tags.js"
import Card from "../ClubCard/ClubCard.js"
import _ from "lodash"

export default class ClubPage extends React.Component {
  constructor(props) {
    super(props);
    //isNavOpen:true,
    this.state = {
      clubs: {},
      showRecItems: 3,
      showAllOrg: 5
    };
    
    /*
    this.onNavToggle = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen
        console.log(this.state)
      });
    };
    */
  }


  
  async componentWillMount() {
    console.log("ComponentDidMount called")
    const response = await fetch(`http://localhost:4100/clubs`);
    const json = await response.json();
    console.log("The state is set")
    this.setState({ clubs: json });
  }

  mapClubsToCard = (ClubOn) => {
    console.log("mapClubsToCard is called")
    return (
      <FlexItem>
      <Card props={ClubOn}></Card>              
    </FlexItem>
    )
  }

  callMappingFunction = (Array, NumbRequired) => {
    for (let i=0; i<NumbRequired; i++ ){
      console.log("MappingFunction is called")
      console.log(`i is ${i}`)
      console.log(this.state.clubs[i])
      return this.mapClubsToCard(this.state.clubs[i]);
    }
  } 
  
    render() {
      //const { isNavOpen } = this.state;
      var card = "";
      var RecCardList = ""
      var AllOrgList = ""
      if (_.isEmpty(this.state.clubs) !== true) {
          RecCardList = this.state.clubs.slice(0, this.state.showRecItems).map(club => {
          return <FlexItem className='spaceleft'>  <Card props={club}> </Card> </FlexItem>;
        });
        AllOrgList = this.state.clubs.slice(0, this.state.showAllOrg).map(club => {
          return <FlexItem className='spaceleft'>  <Card props={club}> </Card> </FlexItem>;
        });

      }

      const PageNav = (
      <Nav className='sidebar'>
        <Bar></Bar>
        <Tags></Tags>
      </Nav>
      )
    
      const Sidebar = <PageSidebar  nav={PageNav} />; //isNavOpen={isNavOpen}
    
      return (
          <Page className='page' header={Header} sidebar={Sidebar} children={Bar}>
          {console.log("Render Called")}
          {console.log(this.state.clubs)}
          <PageSection style={{height: '20em'}}>
            
            <Text className='headert'>Recommended For You </Text>
            <Flex breakpointMods={[{modifier: FlexModifiers["justify-content-flex-start"]}]}>
                {RecCardList}
            </Flex>
                {/*
               
                  <FlexItem>
                    <Card></Card>              
                  </FlexItem>
                  <FlexItem>
                    <Card></Card>              
                  </FlexItem>
                  <FlexItem>
                    <Card></Card>              
                  </FlexItem>
                */}
                

            <Text className='headert'>All Clubs and Organization</Text>
            <Flex breakpointMods={[{modifier: FlexModifiers["justify-content-flex-start"]}]}>
              {AllOrgList}
            </Flex>
            {/* 
            <Flex breakpointMods={[{modifier: FlexModifiers.column}]}>
            <Flex breakpointMods={[{modifier: FlexModifiers["justify-content-space-between"]}]}>
                <FlexItem>
                  <Card></Card>              
                  </FlexItem>
                <FlexItem>
                  <Card></Card>              
                </FlexItem>
                <FlexItem>
                  <Card></Card>              
                </FlexItem>
            </Flex>
            <Flex breakpointMods={[{modifier: FlexModifiers["justify-content-space-between"]}]}>
                <FlexItem>
                  <Card></Card>              
                </FlexItem>
                <FlexItem>
                  <Card></Card>              
                </FlexItem>
                <FlexItem>
                  <Card></Card>              
                </FlexItem>
            </Flex>
            </Flex> */}

        </PageSection>
          </Page>
          
        ); 
      
    }
}
    
