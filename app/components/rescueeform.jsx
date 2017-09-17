import React, {Component} from 'react';
import { postVictim } from '../reducers/victim'
import { whoami } from '../reducers/auth'
import { connect } from "react-redux";

class RescueeForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      emergency: false,
      numPeople: '1',
      phone: '',
      lat: '',
      long: '',
      vehicle: 'car'
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
    const {vehicle, emergency, numPeople, phone, lat, long} = this.state
    this.props.postVictim({emergency: emergency, vehicle: vehicle, capacity: numPeople, latitude: lat, longitude: long, phoneNumber: phone, user_id: this.props.user.id})
  }


  render(){
    return(
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <p>Is this a medical emergency?</p>
          <input id='no' onChange={(event) => this.setState({emergency: event.target.value})} type="radio" name="emergency" value="false" checked /> <label htmlFor='no'>No</label><br />
          <input id='yes' onChange={(event) => this.setState({emergency: event.target.value})} type="radio" name="emergency" value="true" /><label htmlFor='yes'>Yes</label><br />
          <p>Transportation Type</p>
          <input id='car' onChange={(event) => this.setState({vehicle: event.target.value})} type="radio" name="transportation" value="car" checked /><label htmlFor='car'>Car</label><br />
          <input id='boat' onChange={(event) => this.setState({vehicle: event.target.value})} type="radio" name="transportation" value="boat" /><label htmlFor='boat'>Boat</label><br />
          <p>How many people need to be moved to safety?</p>
          <select onChange={(event) => this.setState({numPeople: event.target.value})}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <p>What phone number you can be reached at?</p>
          <input onChange={(event) => this.setState({phone: event.target.value})} type="text" value={this.state.phone} />

          <p>What is your location?</p>
        <p className="fakeLocation">Current Location</p> 

        <button id="rescuebtn" type="submit" value="Request Rescue">Request Rescue</button>
          
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth
})

const mapDispatchToProps = dispatch => ({
  postVictim: victim => {
    console.log(victim)
    dispatch(postVictim(victim))
  },
  getUser: () => {
    dispatch(whoami())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RescueeForm)
