import React from 'react';
import './ClubPage.css';
import {Nav, Text, Page,Header,PageSection,PageSidebar, Flex, FlexItem, FlexModifiers } from '@patternfly/react-core';
import Bar from "../SearchBar/SearchBar.js"
import Tags from "../Tags/Tags.js"
import Card from "../ClubCard/ClubCard.js"
import _ from "lodash"
import {
  Link, withRouter
} from "react-router-dom";


class ClubPage extends React.Component {
  constructor(props) {
    super(props);
    this.changeTags = this.changeTags.bind(this)
    //isNavOpen:true,
    this.state = {
      clubs: {},
      showRecItems: 3,
      showAllOrg: 18,
      tags: [] 
    };
    
  }


  
  async componentWillMount() {
    const response = await fetch(`http://127.0.0.1:8000/api/organizations/`);
    const json = await response.json();
    this.setState({ clubs: json });
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

  checkTags = (club) => {
    console.log(club)
    let clubTagArray = club.tags.split(/, | - /)
    console.log(clubTagArray)
    let hasIntersection = _.intersection(clubTagArray, this.state.tags)
    console.log(hasIntersection)
    let boolean = _.isEmpty(hasIntersection)
    console.log(boolean)
    console.log(!boolean)
    return !boolean
  }

    render() {
      //const { isNavOpen } = this.state;
      var card = "";
      var RecCardList = ""
      var AllOrgList = ""
      if ((_.isEmpty(this.state.tags) !== true) && (_.isEmpty(this.state.clubs) !== true)) {
        RecCardList = this.state.clubs.slice(0, this.state.showRecItems).sort(function (x, y) {
          let a = x.name.toUpperCase(),
              b = y.name.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
      }).map(club => {
          return <FlexItem className='spaceleft'>  <Card props={club}> </Card> </FlexItem>;
        });
          AllOrgList = this.state.clubs.slice(0, this.state.showAllOrg).sort(function (x, y) {
            let a = x.name.toUpperCase(),
                b = y.name.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
        }).map(club => {
          if (this.checkTags(club))
            return <FlexItem className='spaceleft'>  <Card props={club}> </Card> </FlexItem>;
        });
        
      }
      else if (_.isEmpty(this.state.clubs) !== true) {
          RecCardList = this.state.clubs.slice(0, this.state.showRecItems).sort(function (x, y) {
            let a = x.name.toUpperCase(),
                b = y.name.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
        }).map(club => {
          return <FlexItem className='spaceleft'>  <Card props={club}> </Card> </FlexItem>;
        });
          AllOrgList = this.state.clubs.slice(0, this.state.showAllOrg).sort(function (x, y) {
            let a = x.name.toUpperCase(),
                b = y.name.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
        }).map(club => {
          return <FlexItem className='spaceleft'>  <Card props={club}> </Card> </FlexItem>;
        });
      }


      const PageNav = (
      <Nav className='sidebar'>
        <Bar></Bar>
        <Tags action={this.changeTags}></Tags>
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

            <Text className='headert'> Organizations </Text>
            <Flex breakpointMods={[{modifier: FlexModifiers["justify-content-flex-start"]}]}>
              {AllOrgList}
            </Flex>

        </PageSection>
          </Page>
          
        ); 
      
    }
}

export default withRouter(ClubPage);
