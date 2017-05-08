import { createAction } from 'redux-actions'

export const loginFetching = createAction('LOGIN_FETCHING')
export const loginError    = createAction('LOGIN_ERROR')
export const loginSuccess  = createAction('LOGIN_SUCCESS')
export const logout = createAction('LOGOUT')

export function doLogout() {
  return sessionStorage.removeItem('token')
}

export function login(email, password) {
  return dispatch => {
    dispatch(loginFetching())
    return fetch('https://i2x-challenge.herokuapp.com/core/login/',{
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers(
           {
             "content-type": "application/json",
          }
        ),
        body: JSON.stringify(
          {
            email: email,
            password: password
          }
        )
     })
    .then((response) => response.ok ? response.json() : Promise.reject(response.text()))
    .then((responseJson) => dispatch(loginSuccess(responseJson)))
    .catch((error) => dispatch(loginError(error.message)))
  }
}
