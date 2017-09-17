/* TO DO
  ask kate about organizing order routes
*/
import axios from 'axios'

//INITIAL STATE
const initialState = {
  victim: {},
  rescuer: {}
}

// ACTION TYPE CONSTANT
const GET_VICTIM = 'GET_VICTIM'
const CREATE_VICTIM = 'CREATE_VICTIM'
const EDIT_VICTIM = 'EDIT_VICTIM'
const GET_HELP = 'GET_HELP'

// ACTION CREATORS

const getVictim = victim => {
  return {
    type: GET_VICTIM,
    victim
  }
}

const createVictim = victim => {
  return {
    type: CREATE_VICTIM,
    victim
  }
}

const editVictim = victim => {
  return {
    type: EDIT_VICTIM,
    victim
  }
}

const getHelp = (rescuer) => {
  return {
    type: GET_HELP,
    rescuer
  }
}

// THUNKS

export const fetchVictim = id =>
  dispatch =>
  axios.get(`/api/victims/${id}`)
  .then(res => res.data)
  .then(victim => {
    dispatch(getVictim(victim))
  })
  .catch(err => console.log('fetch victim error', err))

export const fetchHelp = id =>
  dispatch =>
  axios.get(`/api/rescuers/match/${id}`)
  .then(res => res.data)
  .then(rescuer => {
    axios.put(`/api/victims/${id}`, {rescuer_id: rescuer.id})
    .then(() => console.log('updated rescuer ID'))
    .catch(err => console.log('update victim error', err))
    dispatch(getHelp(rescuer))
  })
  .catch(err => console.log('fetch victim error', err))

export const postVictim= victim =>
  dispatch =>
  axios.post('api/victims/', victim)
  .then(res => res.data)
  .then(victim => {
    dispatch(createVictim(victim))
  })
  .catch(err => console.log('post victim error', err))

// REDUCER

export default function reducer(state=initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case GET_VICTIM:
    newState.victim = action.victim
    break
  case CREATE_VICTIM:
    newState.victim = action.victim
    break
  case EDIT_VICTIM:
    newState.victim = action.victim
    break
  case GET_HELP:
    newState.rescuer = action.rescuer
    break
  default:
    return state
  }
  return newState
}
