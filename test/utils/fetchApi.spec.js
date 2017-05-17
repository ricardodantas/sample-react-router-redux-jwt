import fetchApi from '../../src/utils/fetchApi'

describe('fetchApi', () => {

  it('should has method post', () => {
    expect(fetchApi.post()).toBeDefined()
  })

  it('should has method get', () => {
    expect(fetchApi.get()).toBeDefined()
  })

  it('should has baseEndpoint', () => {
    expect(fetchApi.baseEndpoint).toEqual('https://i2x-challenge.herokuapp.com')
  })

  it('should has setConfig not setted authorization header attribute', () => {
    expect(fetchApi.setConfig()).toEqual({
      headers: {
        "content-type": "application/json"
      }
    })
  })

  it('should has setConfig setted authorization header attribute', () => {
    const token = 'abcde'
    expect(fetchApi.setConfig(token)).toEqual({
      headers: {
        "content-type": "application/json",
        'Authorization': `JWT ${token}`
      }
    })
  })


  it('should headers setted new paramenter', () => {
    const headerParam = {'abcde':'12345'}

    expect(fetchApi.headers(headerParam)).toEqual({
      ...headerParam,
      "content-type": "application/json",
    })
  })

  it('should config changed', () => {
    const anyParam = {'abcde':'12345'}

    expect(fetchApi.config({},anyParam)).toEqual({
      ...anyParam,
      headers: {
        "content-type": "application/json"
      }
    })
  })

})
