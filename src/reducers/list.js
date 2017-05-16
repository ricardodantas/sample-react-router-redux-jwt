import { handleActions } from 'redux-actions'
import {listFetching, listSuccess, listError} from '../actions/list'
import {initialState} from './initialStates/list'

export default handleActions({

  [listFetching]: (state, action) => {
    return Object.assign({}, state, {
      isFetching: true,
      hasFailed: false,
      hasSuccess: false,
      items: []
    })
  },
  [listSuccess]: (state, action) => {
    return Object.assign({}, state, {
      isFetching: false,
      hasFailed: false,
      hasSuccess: true,
      items: action.payload.results
    })
  },
  [listError]: (state, action) => {
    return Object.assign({}, state, {
      isFetching: false,
      hasFailed: true,
      hasSuccess: false,
      items: []
    })
  },
}, initialState)
