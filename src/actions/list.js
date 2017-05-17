import { createAction } from 'redux-actions'
import axios from 'axios'
import {isEmpty} from 'lodash'

export const listFetching = createAction('LIST_FETCHING')
export const listError    = createAction('LIST_ERROR')
export const listSuccess  = createAction('LIST_SUCCESS')

export async function fetchList() {
  const token = sessionStorage.getItem('token')

  try {
    return await axios.get('https://i2x-challenge.herokuapp.com/ai/recording/list/', {
        headers: {
          "content-type": "application/json",
          "Authorization": `JWT ${token}`
        }
      })
  } catch (e) {
    return e.message
  }

}

export function getList() {


  return async dispatch => {
    dispatch(listFetching())
    const response = await fetchList()
    const {data} = response

    if (!isEmpty(data) && !isEmpty(data.results)) {
      dispatch(listSuccess(data))
    } else {
      dispatch(listError({message: response}))
    }

  }
}
