import React from 'react';

import RescueeBtn from './RescueeBtn'
import RescuerBtn from './RescuerBtn'

export default class PickScreen extends React.Component{
  render(){
    return(
      <div className="pick-screen">
        <RescueeBtn/>
        <RescuerBtn/>
      </div>
    )
  }
}
