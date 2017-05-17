import { createAction } from 'redux-actions'
import {isEmpty} from 'lodash'
import axios from 'axios'
import apiAuth from '../utils/auth'
export const loginFetching = createAction('LOGIN_FETCHING')
export const loginError    = createAction('LOGIN_ERROR')
export const loginSuccess  = createAction('LOGIN_SUCCESS')
export const logout  = createAction('LOGOUT', () => apiAuth.removeToken())

export function login(email, password) {
  return async (dispatch) => {
    dispatch(loginFetching())
    try {
      const {data} = await apiAuth.login(email, password)
      dispatch(loginSuccess({data}))
    }catch (e) {
      dispatch(loginError({message: e.message}))
    }
  }
}
