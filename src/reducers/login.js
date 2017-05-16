import { handleActions } from 'redux-actions'
import {login, logout, doLogout, loginFetching, loginSuccess, loginError} from '../actions/login'
import {initialState} from './initialStates/login'

export default handleActions({

  [logout]: (state, action) => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      hasFailed: false,
      hasSuccess: false,
      response: {},
    })
  },
  [loginFetching]: (state, action) => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      isFetching: true,
      hasSuccess: false,
      hasFailed: false,
      response: action
    })
  },
  [loginSuccess]: (state, action) => {
    return Object.assign({}, state, {
      isAuthenticated: true,
      isFetching: false,
      hasSuccess: true,
      response: action
    })
  },
  [loginError]: (state, action) => {
    return Object.assign({}, state, {
      isFetching: false,
      hasFailed: true,
      response: action
    })
  },
}, initialState)
