import * as Constants from '../constants/constants.js'
import Api from './api'

/**
 * API abstraction for all services used in the application
 */
export default {

  /**
     * API for retrieving location data
     *
     * @type GET
     * @param {*} params
     */
  getData (params) {
    return Api().get(`?starts_with=${params}&version=draft&token=${Constants.ACCESS_TOKEN}`)
  },

  getPost (params) {
    return Api().get(`${params}?version=draft&token=${Constants.ACCESS_TOKEN}`)
  }

}
