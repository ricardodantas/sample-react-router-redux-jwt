import FetchApi from './fetchApi'
import {isEmpty} from 'lodash'

// @flow
export default class Auth extends FetchApi {

  static isAuthenticated(): boolean {
    return !isEmpty(this.getToken())
  }

  static getToken(): string {
    return sessionStorage.getItem('token')
  }

  static removeToken(): any {
    return sessionStorage.clear()
  }

  static storeToken(token: string = '') {
    if (isEmpty(token)) {
        throw new Error("Token is empty.")
    }

    sessionStorage.setItem('token', token)
    return token
  }

  static async login(email: string, password: string) {
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
