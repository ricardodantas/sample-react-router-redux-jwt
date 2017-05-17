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

  it('should handle listFetching', () => {
    expect(reducer(global.initialState,{
      type: actions.listFetching().type})).toEqual({
        isFetching: true,
        hasFailed: false,
        hasSuccess: false,
        items: []
    })
  })

  it('should handle listError', () => {
    expect(reducer(global.initialState,{
      type: actions.listError().type})).toEqual({
        isFetching: false,
        hasFailed: true,
        hasSuccess: false,
        items: []
    })
  })

  it('should handle listSuccess', () => {
    expect(reducer(global.initialState,{
      type: actions.listSuccess().type})).toEqual({
        isFetching: false,
        hasFailed: false,
        hasSuccess: true,
        items: []
    })
  })
})
