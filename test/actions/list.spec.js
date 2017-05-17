import * as actions from '../../src/actions/list'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('list actions', () => {

  beforeEach( () => {

  })

  it('should listFetching action exists', () => {
    expect(actions.listFetching().type).toEqual('LIST_FETCHING')
  })

  it('should listSuccess action exists', () => {
    expect(actions.listSuccess().type).toEqual('LIST_SUCCESS')
  })

  it('should listError action exists', () => {
    expect(actions.listError().type).toEqual('LIST_ERROR')
  })

})
