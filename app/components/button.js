import React, {Component} from 'react'
import { whoami } from '../reducers/auth'
import { connect } from "react-redux";
import { Redirect } from 'react-router'

class TestButton extends Component{
  constructor(props) {
    super(props);
    this.state ={
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password)
  }

  render(){
    return(
      <div className="login-box">
        <div className="social-login">
          <a href='/api/auth/login/facebook'>
            <i className="fa fa-facebook fa-lg"></i>
            Request Help
          </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(TestButton)
