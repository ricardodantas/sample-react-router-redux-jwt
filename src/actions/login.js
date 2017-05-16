import { createAction } from 'redux-actions'
import {isEmpty} from 'lodash'
import axios from 'axios'

export const loginFetching = createAction('LOGIN_FETCHING')
export const loginError    = createAction('LOGIN_ERROR')
export const loginSuccess  = createAction('LOGIN_SUCCESS')
export const logout  = createAction('LOGOUT', () => sessionStorage.clear())

function storeToken(token) {
  if (isEmpty(token)) {
      throw new Error("Token is empty.")
  }

  sessionStorage.setItem('token', token)
  return token
}

export async function fetchLogin (email, password) {
  try {
    return await axios.post('https://i2x-challenge.herokuapp.com/core/login/', {
        email: email,
        password: password
      },{
        headers: {
          "content-type": "application/json"
        }
      })
  } catch (e) {
    return e.message
  }
}

export function login(email, password) {
  return async (dispatch) => {
    dispatch(loginFetching())
    const response = await fetchLogin(email, password)
    const {data} = response

    if (!isEmpty(data) && !isEmpty(data.token)) {
      storeToken(data.token)
      dispatch(loginSuccess({data}))
    } else {
      dispatch(loginError({message: response}))
    }
  }
}
