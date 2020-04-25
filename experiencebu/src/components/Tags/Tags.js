import React from 'react';
import { Checkbox, Text } from '@patternfly/react-core';
import "./Tags.css"

class ControlledCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check1: false, check2: false, check3: false, check4: false, check5: false, check6: false,
      check7: false, check8: false, check9: false, check10: false, check11: false, check12: false,
      check13: false, check14: false, check15: false, check16: false, check17: false, check18: false,
      check19: false, check20: false, check21: false
    };
    this.handleChange = (checked, event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({ [name]: value });
    };
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.check1 !== this.state.check1 && this.state.check1 !== null) {
      this.setState({
        check2: this.state.check1,
        check3: this.state.check1,
        check4: this.state.check1,
        check5: this.state.check1,
        check6: this.state.check1,
        check7: this.state.check1
      })
    }

    if (prevState.check2 !== this.state.check2 || prevState.check3 !== this.state.check3 
      || prevState.check4 !== this.state.check4 || prevState.check5 !== this.state.check5 
      || prevState.check6 !== this.state.check6 || prevState.check7 !== this.state.check7 ) {
      this.setState({
        check1: (this.state.check2 && this.state.check3 && this.state.check4 && this.state.check5 && this.state.check6 && this.state.check7) 
        || (this.state.check2 || this.state.check3 || this.state.check4 || this.state.check5 || this.state.check6 || this.state.check7  ? null : false)
      })
    }

    if (prevState.check15 !== this.state.check15 && this.state.check15 !== null) {
      this.setState({
        check16: this.state.check15,
        check17: this.state.check15,
        check18: this.state.check15
      })
    }

    if (prevState.check16 !== this.state.check16 || prevState.check17 !== this.state.check17 
      || prevState.check18 !== this.state.check18) {
      this.setState({
        check15: (this.state.check16 && this.state.check17 && this.state.check18) 
        || (this.state.check16 || this.state.check17 || this.state.check18 ? null : false)
      })
    }
  }


  render() {
    return (
      <React.Fragment>
        <Text className='tagheader'> Tags </Text>
        <Checkbox
          className='tags'
          label="Academic and Professional"
          isChecked={this.state.check1}
          onChange={this.handleChange}
          id="check-1"
          name="check1"
        />
        <Checkbox
          className="nested"
          label="Business"
          isChecked={this.state.check2}
          onChange={this.handleChange}
          id="check-2"
          name="check2"
        />
        <Checkbox
          className="nested"
          label="CAS Subjects"
          isChecked={this.state.check3}
          onChange={this.handleChange}
          id="check-3"
          name="check3"
        />
        <Checkbox
          className='nested'
          label="Engineering"
          isChecked={this.state.check4}
          onChange={this.handleChange}
          id="check-4"
          name="check4"
        />
        <Checkbox
          className='nested'
          label="Law"
          isChecked={this.state.check5}
          onChange={this.handleChange}
          id="check-5"
          name="check5"
        />
        <Checkbox
          className='nested'
          label="Technological"
          isChecked={this.state.check6}
          onChange={this.handleChange}
          id="check-6"
          name="check6"
        />
        <Checkbox
          className='nested'
          label="Others"
          isChecked={this.state.check7}
          onChange={this.handleChange}
          id="check-7"
          name="check7"
        />
        <Checkbox
          className='tags'
          label="Community Service"
          isChecked={this.state.check8}
          onChange={this.handleChange}
          id="check-8"
          name="check8"
        />
        <Checkbox
          className='tags'
          label="Cultural"
          isChecked={this.state.check9}
          onChange={this.handleChange}
          id="check-9"
          name="check9"
        />
        <Checkbox
          className='tags'
          label="Governments and Councils"
          isChecked={this.state.check10}
          onChange={this.handleChange}
          id="check-10"
          name="check10"
        />
        <Checkbox
          className='tags'
          label="Greek Life"
          isChecked={this.state.check11}
          onChange={this.handleChange}
          id="check-11"
          name="check11"
        />
        <Checkbox
          className='tags'
          label="Media Arts"
          isChecked={this.state.check12}
          onChange={this.handleChange}
          id="check-12"
          name="check12"
        />
        <Checkbox
          className='tags'
          label="Sports"
          isChecked={this.state.check13}
          onChange={this.handleChange}
          id="check-13"
          name="check13"
        />
        <Checkbox
          className='tags'
          label="Peace and Justice"
          isChecked={this.state.check14}
          onChange={this.handleChange}
          id="check-14"
          name="check14"
        />
        <Checkbox
          className='tags'
          label="Performance Arts"
          isChecked={this.state.check15}
          onChange={this.handleChange}
          id="check-15"
          name="check15"
        />
        <Checkbox
          className='nested'
          label="Dance"
          isChecked={this.state.check16}
          onChange={this.handleChange}
          id="check-16"
          name="check16"
        />
        <Checkbox
          className='nested'
          label="Music"
          isChecked={this.state.check17}
          onChange={this.handleChange}
          id="check-17"
          name="check17"
        />
        <Checkbox
          className='nested'
          label="Theatre"
          isChecked={this.state.check18}
          onChange={this.handleChange}
          id="check-18"
          name="check18"
        />
        <Checkbox
          className='tags'
          label="Political"
          isChecked={this.state.check19}
          onChange={this.handleChange}
          id="check-19"
          name="check19"
        />
        <Checkbox
          className='tags'
          label="Recreational"
          isChecked={this.state.check20}
          onChange={this.handleChange}
          id="check-20"
          name="check20"
        />
        <Checkbox
          className='tags'
          label="Religious"
          isChecked={this.state.check21}
          onChange={this.handleChange}
          id="check-21"
          name="check21"
        />
      </React.Fragment>
    );
  }
}

export default ControlledCheckbox