import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import {initialState} from '../../src/reducers/initialStates/login'
import reducer from '../../src/reducers/login'
import * as actions from '../../src/actions/login'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Login reducers', () => {

  beforeEach(() => {
    global.initialState = initialState
  })

  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual(global.initialState)
  })

  it('should handle logout', () => {
    expect(reducer(global.initialState,{type: actions.logout().type})).toEqual(global.initialState)
  })

})
