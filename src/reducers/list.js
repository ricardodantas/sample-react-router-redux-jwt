import { handleActions } from 'redux-actions'
import {listFetching, listSuccess, listError} from '../actions/list'
import {initialState} from './initialStates/list'
// @flow
export default handleActions({

  [listFetching]: (state: Object, action: Object) => {
    return Object.assign({}, state, {
      isFetching: true,
      hasFailed: false,
      hasSuccess: false,
      items: []
    })
  },
  [listSuccess]: (state: Object, action: Object) => {
    return Object.assign({}, state, {
      isFetching: false,
      hasFailed: false,
      hasSuccess: true,
      items: action.payload && action.payload.results ? action.payload.results : []
    })
  },
  [listError]: (state: Object, action: Object) => {
    return Object.assign({}, state, {
      isFetching: false,
      hasFailed: true,
      hasSuccess: false,
      items: []
    })
  },
}, initialState: Object)
