import React from 'react';
import {SearchIcon} from '@patternfly/react-icons';
import {
  Button,
  InputGroup,
  InputGroupText,
  TextInput
} from '@patternfly/react-core';
import "./SearchBar.css";
import { DataToolbar , DataToolbarItem, DataToolbarContent } from '@patternfly/react-core';

export default class SearchBar extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        const items = <React.Fragment>
        <DataToolbarItem>
        <InputGroup>
        <Button variant="control"  className='pf-c-page__button'>
          <SearchIcon className='icon'/>
          </Button>
          <TextInput name="textInput11" id="textInput11" type="search" aria-label="search input example" />
        </InputGroup>
        </DataToolbarItem>
        </React.Fragment>

      return (
         <DataToolbar id="data-toolbar">
             <DataToolbarContent className='mast'>{items}
             </DataToolbarContent>
        </DataToolbar>
      );
    }
  }
  