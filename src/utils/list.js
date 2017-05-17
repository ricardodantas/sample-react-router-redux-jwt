// import FetchApi from './fetchApi'
import Auth from './auth'
import {isEmpty} from 'lodash'

export default class List extends Auth {

  static async getList() {
    try {
      return await super.get('ai/recording/list/', super.getToken())
    } catch (e) {
      throw new Error(e.message)
    }
  }
}
