import { handleActions } from 'redux-actions'
import {login, logout, doLogout, loginFetching, loginSuccess, loginError} from '../actions/login'
import _ from 'lodash'

const initialState = {
  isAuthenticated: !_.isEmpty(sessionStorage.getItem('token')),
  isFetching: false,
  hasFailed: false,
  hasSuccess: false,
  token: null,
  response: {},
}

export default handleActions({

  [logout]: (state, action) => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      token: null,
      response: {},
    })
  },
  [loginFetching]: (state, action) => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      isFetching: true,
      hasSuccess: false,
      hasFailed: false,
      token: null,
      response: action
    })
  },
  [loginSuccess]: (state, action) => {
    return Object.assign({}, state, {
      isAuthenticated: true,
      isFetching: false,
      hasSuccess: true,
      token: action.payload.token,
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
