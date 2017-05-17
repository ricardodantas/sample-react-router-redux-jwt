import { handleActions } from 'redux-actions'
import {login, logout, doLogout, loginFetching, loginSuccess, loginError} from '../actions/login'
import {initialState} from './initialStates/login'

export default handleActions({

  [logout]: (state, action) => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      isFetching: false,
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
      response: {}
    })
  },
  [loginSuccess]: (state, action) => {
    return Object.assign({}, state, {
      isAuthenticated: true,
      isFetching: false,
      hasSuccess: true,
      hasFailed: false,
      response: action.payload || {}
    })
  },
  [loginError]: (state, action) => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      isFetching: false,
      hasFailed: true,
      hasSuccess: false,
      response: action.payload || {}
    })
  },
}, initialState)
