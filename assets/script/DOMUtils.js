/* eslint-disable prefer-const */
/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
/* eslint-disable no-self-compare */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
(function (window) {
  'use strict'

  const comparator = {

    '<' (a, b) { return a < b },

    '<=' (a, b) { return a <= b },

    '>' (a, b) { return a > b },

    '>=' (a, b) { return a >= b }

  }

  window.DOMUtils = function (selector, context) {
    return new DOMUtils.query(selector, context)
  }

  DOMUtils.extend = function () {
    let target = this; let key; let count = 0

    if (arguments.length > 1) {
      target = arguments[0]

      count = 1
    }

    for (count; count < arguments.length; count++) {
      for (key in arguments[count]) {
        if (arguments[count].hasOwnProperty(key)) {
          target[key] = arguments[count][key]
        }
      }
    }

    return target
  }

  DOMUtils.extend({

    ready (func) {
      if (typeof func === 'function') {
        window.addEventListener('load', func)
      }
    },

    each (object, callback) {
      // Stop if no object or callback given.
      if (!object || !callback) {
        return false
      }

      for (let i = 0; i < object.length; i++) {
        callback.call(object[i], i)
      }

      return this
    },

    query (selector, context) {
      // If no context is given then use document.
      context = context || document

      // Stop if no selector or blank selector found.
      if (!selector || selector === '') {
        return false
      }

      // Return selector if is already a DOM instance.
      if (selector instanceof DOMUtils) {
        return selector
      }

      // If the selector is a single node then return it.
      if (selector.nodeType === 1 || selector.nodeType === 9) {
        this[0] = selector

        this.length = 1

        return this
      }

      [].push.apply(this, context.querySelectorAll(selector))

      return this
    },

    isNull (element) {
      return element === null
    },

    isUndefined (element) {
      return element === void 0
    },

    isElement (element) {
      if (typeof HTMLElement === 'object') {
        return element instanceof HTMLElement
      }

      return element && typeof element === 'object' && element.nodeType === 1 && typeof element.nodeName === 'string'
    },

    isNode (node) {
      if (typeof Node === 'object') {
        return node instanceof Node
      }

      return node && typeof node === 'object' && typeof node.nodeType === 'number' && typeof node.nodeName === 'string'
    },

    isObj (obj) {
      return obj === Object(obj)
    },

    isNumber (num) {
      return !isNaN(parseFloat(num)) && isFinite(num)
    },

    isFunction (value) { // fallback check is for IE
      return toString.call(value) === '[object Function]' || typeof value === 'function'
    },

    // Arithmetic checks
    /* -------------------------------------------------------------------------- */
    random () {
      return Math.random()
    },

    // Array utils
    /* -------------------------------------------------------------------------- */
    is_arr (arr) {
      return typeof (arr) === 'object' && (Array.isArray(arr))
    },

    // Mobile device detection
    /* --------------------------------------------------------------------------- */

    compareVersion (version, range) {
      const string = (range + '')

      const n = +(string.match(/\d+/) || NaN)

      const op = string.match(/^[<>]=?|/)[0]

      return comparator[op] ? comparator[op](version, n) : (version == n || n !== n)
    },

    uAgent () {
      return (navigator && navigator.userAgent || '').toLowerCase()
    },

    appVersion () {
      return (navigator && navigator.appVersion || '').toLowerCase()
    },

    is_tablet () {
      return this.androidTablet() ||

                    this.ipad() ||

                    this.windowsTablet()
    },

    ipad (range) {
      const match = this.uAgent().match(/ipad.+?os (\d+)/)

      return match !== null && this.compareVersion(match[1], range)
    },

    androidTablet () {
      return /android/.test(this.uAgent()) && !/mobile/.test(this.uAgent())
    },

    windowsTablet () {
      return this.windows() && !this.is_windowsPhone() && /touch/.test(this.uAgent())
    },

    is_tabletSize () {
      return !!(((window.innerWidth >= 768) && (window.innerWidth < 1025)))
    },

    is_mobile () {
      return this.is_iphone() ||

                   this.is_ipod() ||

                   this.is_androidPhone() ||

                   this.is_blackberry() ||

                   this.is_windowsPhone()

      // this.is_mobileSize();
    },

    is_iphone (range) {
      const match = this.uAgent().match(/iphone(?:.+?os (\d+))?/)

      return !!match && this.compareVersion(match[1] || 1, range)
    },

    is_ipod (range) {
      const match = this.uAgent().match(/ipod.+?os (\d+)/)

      return !!match && this.compareVersion(match[1], range)
    },

    is_androidPhone () {
      return /android/.test(this.uAgent()) && /mobile/.test(this.uAgent())
    },

    is_blackberry () {
      return /blackberry/.test(this.uAgent()) || /bb10/.test(this.uAgent())
    },

    windows () {
      return /win/.test(this.appVersion())
    },

    is_windowsPhone () {
      return this.windows() && /phone/.test(this.uAgent())
    },

    is_mobileSize () {
      return true

      // return (window.innerWidth) < 768 ? true : false;
    },

    // Array utils
    /* ----------------------------------------------------------------------------- */

    emptyArray (arr) {
      for (let i = arr.length; i > 0; i--) {
        arr.pop()
      }

      arr.length = 0
    },

    shuffle (array) {
      const arrLength = array.length

      for (let i = 0; i < arrLength; i++) {
        const random = arrLength * this.random() | 0

        if (random == i) { continue }

        const newArrElement = array[random]

        array[random] = array[i]

        array[i] = newArrElement
      }

      return array
    },

    transformToArray (parameters) {
      const params = {}

      const arr = parameters.split('&')

      for (let i = 0; i < arr.length; i++) {
        const newArr = arr[i].split('=')

        params[newArr[0]] = newArr[1]
      }

      return params
    },

    // String utils
    /* -------------------------------------------------------------------------- */
    capitaliseFirst (string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    },

    capitaliseAllWords (str) {
      str = str.toLocaleLowerCase()

      const pieces = str.split(' ')

      for (let i = 0; i < pieces.length; i++) {
        const j = pieces[i].charAt(0).toUpperCase()

        pieces[i] = j + pieces[i].substr(1)
      }

      return pieces.join(' ')
    },

    searchWord (word, string) {
      word = word.toLowerCase()

      string = string.toLowerCase()

      const result = string.search(word)

      if (result == -1) { return false } else { return true }
    },

    stripCharacters (string) {
      return string.replace(/\D/g, '')
    },

    calculateLineCount (element) {
      const lineHeightBefore = element.css('line-height')

      const boxSizing = element.css('box-sizing')

      let height

      let lineCount

      // Force the line height to a known value
      element.css('line-height', '1px')

      // Take a snapshot of the height
      height = parseFloat(element.css('height'))

      // Reset the line height
      element.css('line-height', lineHeightBefore)

      if (boxSizing == 'border-box') {
        // With "border-box", padding cuts into the content, so we have to subtract
        // it out
        const paddingTop = parseFloat(element.css('padding-top'))

        const paddingBottom = parseFloat(element.css('padding-bottom'))

        height -= (paddingTop + paddingBottom)
      }

      // The height is the line count
      lineCount = height

      return lineCount
    },

    // Timer utils
    /* -------------------------------------------------------------------------- */

    debounce (func, wait, immediate) {
      let timeout

      return function () {
        const context = this; const args = arguments

        const later = function () {
          timeout = null

          if (!immediate) { func.apply(context, args) }
        }

        const callNow = immediate && !timeout

        clearTimeout(timeout)

        timeout = setTimeout(later, wait)

        if (callNow) { func.apply(context, args) }
      }
    },

    throttle (delay, fn) {
      let last, deferTimer

      return function () {
        const context = this; const args = arguments; const now = +new Date()

        if (last && now < last + delay) {
          clearTimeout(deferTimer)

          deferTimer = setTimeout(function () { last = now; fn.apply(context, args) }, delay)
        } else {
          last = now

          fn.apply(context, args)
        }
      }
    },

    // URL utils
    /* -------------------------------------------------------------------------- */

    getURLInformation () {
      const location = window.location

      return {

        protocol: location.protocol,

        host: location.host,

        hostname: location.hostname,

        port: location.port,

        pathname: location.pathname

      }
    },

    getParameterByName (name) {
      const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search)

      return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
    },

    getQueryParams (string) {
      if (_.isEmpty(app.utils.getParameterByName(string))) { return false }

      return app.utils.getParameterByName(string)
    },

    getAllQueryParams () {
      const string = window.location.search.substr(1)

      return string != null && string != '' ? app.utils.transformToArray(string) : {}
    },

    vendor_prefix () {
      let prefix

      const styles = window.getComputedStyle(document.documentElement, '')

      prefix = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1]

      return prefix
    },

    numberWithCommas (x) {
      const parts = x.toString().split('.')

      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

      return parts.join('.')
    }

  })

  DOMUtils.query.prototype = DOMUtils.prototype

  module.exports = window.DOMUtils
})(window)
