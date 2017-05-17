import { createAction } from 'redux-actions'
import apiList from '../utils/list'
import {isEmpty} from 'lodash'

export const listFetching = createAction('LIST_FETCHING')
export const listError    = createAction('LIST_ERROR')
export const listSuccess  = createAction('LIST_SUCCESS')

export function getList() {
  return async dispatch => {
    dispatch(listFetching())
    try {
      const {data} = await apiList.getList()
      dispatch(listSuccess(data))
    } catch(e) {
      dispatch(listError({message: e.message}))
    }
  }
}
