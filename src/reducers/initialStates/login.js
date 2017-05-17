import {isEmpty} from 'lodash'
import apiAuth from '../../utils/auth'

export const initialState = {
  isAuthenticated: apiAuth.isAuthenticated(),
  isFetching: false,
  hasFailed: false,
  hasSuccess: false,
  response: {},
}
