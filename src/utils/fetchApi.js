import axios from 'axios'
import {isEmpty} from 'lodash'

export default class FetchApi {

  static baseEndpoint = 'https://i2x-challenge.herokuapp.com'

  static config (headers = {}, anyParam = {}) {
    return {
      headers: this.headers(headers),
      ...anyParam
    }
  }

  static headers(headerParams = {}) {
    return {
      "content-type": "application/json",
      ...headerParams
    }
  }

  static setConfig(token = null) {
    let config = this.config()

    if (!isEmpty(token)) {
      config = Object.assign({}, this.config(this.headers({"Authorization": `JWT ${token}`})))
    }

    return config
  }

  static async post(url = null, data = {}, token = null) {
    const config = this.setConfig(token)
    return await axios.post(`${this.baseEndpoint}/${url}`, data, config)
  }

  static async get(url = null, token = null) {
    const config = this.setConfig(token)
    return await axios.get(`${this.baseEndpoint}/${url}`, config)
  }

}
