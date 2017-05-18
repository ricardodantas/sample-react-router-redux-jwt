import axios from 'axios'
import {isEmpty} from 'lodash'

// @flow
export default class FetchApi {

  static baseEndpoint: string = 'https://i2x-challenge.herokuapp.com'

  static config (headers: Object = {}, anyParam: Object = {}): Object {
    return {
      headers: this.headers(headers),
      ...anyParam
    }
  }

  static headers(headerParams: Object = {}): Object {
    return {
      "content-type": "application/json",
      ...headerParams
    }
  }

  static setConfig(token: string = ''): Object {
    let config = this.config()

    if (!isEmpty(token)) {
      config = Object.assign({}, this.config(this.headers({"Authorization": `JWT ${token}`})))
    }

    return config
  }

  static async post(url: string= '', data: Object = {}, token: string = '') {
    const config = this.setConfig(token)
    return await axios.post(`${this.baseEndpoint}/${url}`, data, config)
  }

  static async get(url: string = '', token: string = '') {
    const config = this.setConfig(token)
    return await axios.get(`${this.baseEndpoint}/${url}`, config)
  }

}
