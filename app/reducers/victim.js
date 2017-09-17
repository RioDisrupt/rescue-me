/* TO DO
  ask kate about organizing order routes
*/
import axios from 'axios'

//INITIAL STATE
const initialState = {
  victim: {}
}

// ACTION TYPE CONSTANT
const GET_VICTIM = 'GET_VICTIM'
const CREATE_VICTIM = 'CREATE_VICTIM'
const EDIT_VICTIM = 'EDIT_VICTIM'

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

// THUNKS

export const fetchVictim = id =>
  dispatch =>
  axios.get(`/api/victims/${id}`)
  .then(res => res.data)
  .then(victim => {
    dispatch(getVictim(victim))
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

export const updateOrderStatus = (id, victim) =>
  dispatch =>
  axios.put(`/api/victims/${id}`, victim)
  .then(res => res.data)
  .then(victim => {
    dispatch(editVictim(victim))
  })
  .catch(err => console.log('update victim error', err))

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
  default:
    return state
  }
  return newState
}
