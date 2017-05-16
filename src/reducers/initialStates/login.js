import {isEmpty} from 'lodash'

export const initialState = {
  isAuthenticated: !isEmpty(sessionStorage.getItem('token')),
  isFetching: false,
  hasFailed: false,
  hasSuccess: false,
  response: {},
}
