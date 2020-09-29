// ==========================================================================
// (AXIOS) - Promise based HTTP client for the browser.
// Implements Bearer (token) authentication
// Author:  Daniel Nedelcu
// ==========================================================================

import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://api.storyblok.com/v1/cdn/stories/`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
