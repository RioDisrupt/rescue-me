import React from 'react';

export default class PickScreen extends React.Component{
  render(){

    return(
      <div>
        <div className="picker">
          <div className="gethelp">
            <a href="">
              Get Help
            </a>
          </div>
        </div>
        <div className="picker">
          <div className="givehelp">
            <a href="">
              Give Help
            </a>
          </div>
        </div>
      </div>
    )
  }
}
