import React from 'react';

export default class RescueeForm extends React.Component{
  render(){

    return(
      <div className="form">
        <form>
          <p>Is this a medical emergency?</p>
          <input type="radio" name="yes" value="yes" />
          <p>Yes</p>

          <input type="radio" name="no" value="no" />
          <p>No</p>


          <p>How many people need to be moved to safety?</p>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <p>What phone number you can be reached at?</p>
          <input type="text" value="phonenumber" />

          <p>What is your location?</p>
          <p className="fakeLocation">Current Location</p>

          <input type="button" onclick="" value="Request Rescue"/>
        </form>
      </div>
    )
  }
}
