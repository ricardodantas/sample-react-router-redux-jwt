import {isEmpty} from 'lodash'
import apiAuth from '../../utils/auth'

// @flow
export const initialState: {
  isFetching: boolean,
  hasFailed: boolean,
  hasSuccess: boolean,
  response: Object<null>,
} = {
  isAuthenticated: apiAuth.isAuthenticated(),
  isFetching: false,
  hasFailed: false,
  hasSuccess: false,
  response: {},
}
