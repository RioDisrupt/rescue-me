import React from 'react';

export default class RescueeForm extends React.Component{
  render(){

    return(
      <div className="form">
        <h1>Get Help</h1>
        <form>
          <p>Is this a medical emergency?</p>

          <div className="yesno">
            <input type="radio" name="yes" value="yes" />
            <p>Yes</p>
            <input type="radio" name="no" value="no" />
            <p>No</p>
          </div>

          <p>How many people need to be moved to safety?</p>
          <div className="select-style">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <p>What phone number you can be reached at?</p>
          <input type="text" className="inputbox"/>

          <p>What is your location?</p>
          <input type="text" className="inputbox"/>

          <button type="button" onclick="" value="Request Rescue">Request Rescue</button>
        </form>
      </div>
    )
  }
}
