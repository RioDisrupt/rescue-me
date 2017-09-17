import React, {Component} from 'react';
import { postRescuer } from '../reducers/rescuer'
import { whoami } from '../reducers/auth'
import { connect } from "react-redux";

class RescuerForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      emt: false,
      numPeople: '1',
      phone: '',
      lat: '',
      long: '',
      vehicle: 'land',
      active: false
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success, this.error)
    this.props.getUser()
  }

  success = position => {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    this.setState({lat: latitude, long: longitude})
  }

  error = () => {
    console.log("Unable to retrieve your location")
    this.setState({lat: '37.7757407', long: '-122.38955'})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {vehicle, emt, numPeople, phone, lat, long, active} = this.state
    this.props.postRescuer({medicalExperince: emt, vehicle: vehicle, capacity: numPeople, latitude: lat, longitude: long, phoneNumber: phone, user_id: this.props.user.id, active: active})
  }

  render(){
    return(
      <div className="form">
        <h1>Give Help</h1>
        <form onSubmit={this.handleSubmit}>
          <p>What type of vehicle do you have?</p>
          <div className="select-style">
            <select onChange={(event) => this.setState({vehicle: event.target.value})}>
              <option value="land">Land</option>
              <option value="water">Water</option>
              <option value="air">Air</option>
            </select>
          </div>

          <p>How many people can you accomodate?</p>
          <div className="select-style">
            <select onChange={(event) => this.setState({numPeople: event.target.value})}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <p>What phone number you can be reached at?</p>
          <input className="inputbox" onChange={(event) => this.setState({phone: event.target.value})} type="text" value={this.state.phone} />

          <p>Do you have EMT training?</p>
          <div className="yesno">
            <input onChange={(event) => this.setState({emt: event.target.value})} id='emt-yes' type="radio" name="emt" value="true"/>
            <label htmlFor='emt-yes'>Yes</label><br />
            <input onChange={(event) => this.setState({emt: event.target.value})} id='emt-no' type="radio" name="emt" value="false" checked/>
            <label htmlFor='emt-no'>No</label><br />
          </div>

          <p>Current Status</p>
          <div className="yesno">
            <input onChange={(event) => this.setState({active: event.target.value})} id='status-active' type="radio" name="status" value="true" checked/>
            <label htmlFor='status-active'>Active</label>< br />
            <input onChange={(event) => this.setState({active: event.target.value})} id='status-away' type="radio" name="status" value="false" />
            <label htmlFor='status-away'>Away</label><br />
          </div>
          <button type="submit" value="Request Rescue">Request Rescue</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth
})

const mapDispatchToProps = dispatch => ({
  postRescuer: rescuer => {
    dispatch(postRescuer(rescuer))
  },
  getUser: () => {
    dispatch(whoami())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RescuerForm)
