import FetchApi from './fetchApi'
import {isEmpty} from 'lodash'

export default class Auth extends FetchApi {

  static isAuthenticated() {
    return !isEmpty(this.getToken())
  }

  static getToken() {
    return sessionStorage.getItem('token')
  }

  static removeToken() {
    return sessionStorage.clear()
  }

  static storeToken(token = null) {
    if (isEmpty(token)) {
        throw new Error("Token is empty.")
    }

    sessionStorage.setItem('token', token)
    return token
  }

  static async login(email, password) {
    try {
      const response = await super.post('core/login/', {
        email,
        password
      })
      return this.storeToken(response.data.token)
    } catch (e) {
      throw new Error(e.message)
    }
  }
}
