import { handleActions } from 'redux-actions'
import {login, logout, doLogout, loginFetching, loginSuccess, loginError} from '../actions/login'
import {initialState} from './initialStates/login'
// @flow
export default handleActions({

  [logout]: (state: Object, action: Object) => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      isFetching: false,
      hasFailed: false,
      hasSuccess: false,
      response: {},
    })
  },
  [loginFetching]: (state: Object, action: Object) => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      isFetching: true,
      hasSuccess: false,
      hasFailed: false,
      response: {}
    })
  },
  [loginSuccess]: (state: Object, action: Object) => {
    return Object.assign({}, state, {
      isAuthenticated: true,
      isFetching: false,
      hasSuccess: true,
      hasFailed: false,
      response: action.payload || {}
    })
  },
  [loginError]: (state: Object, action: Object) => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      isFetching: false,
      hasFailed: true,
      hasSuccess: false,
      response: action.payload || {}
    })
  },
}, initialState: Object)
