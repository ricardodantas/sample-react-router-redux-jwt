import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import {initialState} from '../../src/reducers/initialStates/list'
import reducer from '../../src/reducers/list'
import * as actions from '../../src/actions/list'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('List reducers', () => {

  beforeEach(() => {
    global.initialState = initialState
  })

  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual(global.initialState)
  })

})
