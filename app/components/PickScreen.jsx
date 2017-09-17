import React from 'react';

export default class PickScreen extends React.Component{
  render(){

    return(
      <div>
        <div className="picker-top">
          <div className="gethelp">
            <a href="">
              Get Help
            </a>
          </div>
        </div>
        <div className="picker-bottom">
          <div className="givehelp">
            <a href="">
              Offer Help
            </a>
          </div>
        </div>
      </div>
    )
  }
}
