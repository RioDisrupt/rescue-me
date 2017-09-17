import React, {Component} from 'react'

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
            Start
          </a>
        </div>
      </div>
    )
  }
}

import {connect} from 'react-redux'

export default connect(null, null)(TestButton);
