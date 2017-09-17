import React from 'react';

export default class RescuerForm extends React.Component{
  render(){

    return(
      <div className="form">
        <h1>Give Help</h1>
        <form>
          <p>What type of vehicle do you have?</p>
          <div className="select-style">
            <select>
              <option value="1">Land</option>
              <option value="2">Water</option>
              <option value="3">Air</option>
            </select>
          </div>

          <p>How many people can you accomodate?</p>
          <div className="select-style">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <p>Do you have EMT training?</p>
          <div className="yesno">
            <input type="radio" name="yes" value="yes" />
            <p>Yes</p>
            <input type="radio" name="no" value="no" />
            <p>No</p>
          </div>

          <p>Current Status</p>
          <div className="yesno">
            <input type="radio" name="yes" value="yes" />
            <p>Active</p>
            <input type="radio" name="no" value="no" />
            <p>Away</p>
          </div>



          <button type="button" onclick="" value="Request Rescue">Complete</button>
        </form>
      </div>
    )
  }
}
