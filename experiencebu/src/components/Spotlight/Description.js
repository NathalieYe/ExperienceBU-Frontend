import React from 'react'
import {Text} from '@patternfly/react-core'

const renderDescription = ({ clubs }) => {
    console.log(Object.keys(clubs).length)
    if (Object.keys(clubs).length != 0) {
      console.log("In the function")
      console.log({clubs})
      return clubs[0].description
    }
    return <Text> Helloitme </Text>
  }


export default renderDescription
