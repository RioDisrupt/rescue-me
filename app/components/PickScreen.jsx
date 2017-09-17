import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { whoami } from '../reducers/auth'
import { connect } from "react-redux";

class PickScreen extends Component{
  render(){
    return(
      <div>
        <div className="picker-top">
          <div className="gethelp">
            <Link to="/gethelp">
              Get Help
            </Link>
          </div>
        </div>
        <div className="picker-bottom">
          <div className="givehelp">
            <Link to="/givehelp">
              Give Help
            </Link>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  user: state.auth
})

const mapDispatchToProps = dispatch => ({
  getUser: () => {
    dispatch(whoami())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PickScreen)
