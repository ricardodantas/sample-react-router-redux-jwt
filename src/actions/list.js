import { createAction } from 'redux-actions'

export const listFetching = createAction('LIST_FETCHING')
export const listError    = createAction('LIST_ERROR')
export const listSuccess  = createAction('LIST_SUCCESS')

export function getList() {
  const token = sessionStorage.getItem('token')

  return dispatch => {
    dispatch(listFetching())
    return fetch('https://i2x-challenge.herokuapp.com/ai/recording/list/',{
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers(
           {
             "content-type": "application/json",
             "Authorization": `JWT ${token}`
          }
        )
     })
    .then((response) => response.ok ? response.json() : Promise.reject(response.text()))
    .then((responseJson) => dispatch(listSuccess(responseJson)))
    .catch((error) => dispatch(listError(error.message)))
  }
}
