import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import login from './login'
import list from './list'

const rootReducer = combineReducers({
  login,
  list,
  routing
})

export default rootReducer
