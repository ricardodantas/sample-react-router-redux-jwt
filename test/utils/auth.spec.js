import Auth from '../../src/utils/auth'

describe('Auth', () => {

  it('should has isAuthenticated method', () => {
    expect(Auth.isAuthenticated).toBeDefined()
  })

  it('should has getToken method', () => {
    expect(Auth.getToken).toBeDefined()
  })

  it('should has removeToken method', () => {
    expect(Auth.removeToken).toBeDefined()
  })

  it('should has storeToken method', () => {
    expect(Auth.storeToken).toBeDefined()
  })

  it('should has login method', () => {
    expect(Auth.login).toBeDefined()
  })

})
