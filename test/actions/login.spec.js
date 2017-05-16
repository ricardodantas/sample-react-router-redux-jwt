// import { spy } from 'sinon'
import * as actions from '../../src/actions/login'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Login actions', () => {

  beforeEach( () => {

  })

  it('should logout action exists', () => {
    expect(actions.logout().type).toEqual('LOGOUT')
  })

  it('should loginFetching action exists', () => {
    expect(actions.loginFetching().type).toEqual('LOGIN_FETCHING')
  })

  it('should loginSuccess action exists', () => {
    expect(actions.loginSuccess().type).toEqual('LOGIN_SUCCESS')
  })

  it('should loginError action exists', () => {
    expect(actions.loginError().type).toEqual('LOGIN_ERROR')
  })

  it('should fetchLogin action auhtorized', async () => {

    const {data} = await actions.fetchLogin('challenge@i2x.ai', 'pass123')
    expect(data).toEqual(expect.objectContaining({
      token: expect.any(String)
    }))
  })

  it('should fetchLogin action not be auhtorized', async () => {
    const response = await actions.fetchLogin('awssad', 'asdsad')
    expect(response).toContain('Request failed with status code 400')
  })

})
