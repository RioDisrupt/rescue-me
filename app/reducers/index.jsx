import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  rescuer: require('./rescuer').default,
  victim: require('./victim').default
})

export default rootReducer
