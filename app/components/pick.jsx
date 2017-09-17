import React from 'react';

import rescueeBtn from '/RescueeBtn';
import rescuerBtn from '/RescuerBtn';

export default class pick extends React.Component{
  render(){

    return(
      <div className="pickContainer">
        <RescueeBtn/>
        <RescuerBtn/>
      </div>
    )
  }
}
