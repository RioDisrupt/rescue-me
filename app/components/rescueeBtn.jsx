import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class RescueeBtn extends Component{
  render(){
    return(
      <div className="rescuee">
        <Link to='/gethelp'>I Need Help</Link>
      </div>
    )
  }
}
