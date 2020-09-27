/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
class DOM {
  create (str) {
    const frag = document.createDocumentFragment()
    const elem = document.createElement('div')
    elem.innerHTML = str

    while (elem.childNodes[0]) {
      frag.appendChild(elem.childNodes[0])
    }

    return frag
  }

  find (a, b) {
    const c = a.match(/^(\W)?(.*)/)
    let o
    const select = 'getElement' + (c[1] ? c[1] === '#' ? 'ById' : 'sByClassName' : 'sByTagName')

    if (select === 'getElementsByClassName' && !document.getElementsByClassName) {
      o = (b || document).querySelectorAll(a)

      if (/[\ \>]/.test(a)) {
        console.log('WARNING: Using IE8 querySelectorAll fallback. This only supports simple selectors, not descendants.')
      }
    } else {
      o = (b || document)[select](c[2])
    }

    return o
  }

  remove (el) {
    el = (typeof el === 'string') ? DOM.find(el) : el

    if (el) {
      if (el.length) {
        let i = el.length; while (i--) { ; }

        if (el[i] && el[i].parentNode) { el[i].parentNode.removeChild(el[i]) }
      } else {
        el.parentNode.removeChild(el)
      }
    }
  }

  removeClass (el, classname) {
    el = (typeof el === 'string') ? DOM.find(el) : el

    if (el) {
      const exp1 = /(?:^|\s)/
      const exp2 = /(?!\S)/g
      const exp = new RegExp(exp1.source + classname + exp2.source)

      if (el.length) {
        let i = el.length; while (i--) {
          el[i].className = el[i].className.replace(exp, '')
        }
      } else {
        el.className = el.className.replace(exp, '')
      }
    }
  }

  addClass (el, classname) {
    el = (typeof el === 'string') ? DOM.find(el) : el

    if (el) {
      if (el.length) {
        let i = el.length; while (i--) {
          if (!el[i].className.includes(classname)) { el[i].className = (el[i].className === '') ? classname : el[i].className + ' ' + classname }
        }
      } else if (!el.className || (el.className && !el.className.includes(classname))) { el.className = (el.className === '') ? classname : el.className + ' ' + classname }
    }
  }

  hasClass (el, classname) {
    el = (typeof el === 'string') ? DOM.find(el) : el

    if (el) {
      const selector = ' ' + classname + ' '

      return ((' ' + el.className + ' ').replace(/[\n\t]/g, ' ').includes(selector))
    }

    return false
  }

  toggleClass (el, classname) {
    if (DOM.hasClass(el, classname)) {
      DOM.removeClass(el, classname)
    } else {
      DOM.addClass(el, classname)
    }
  }
}

export { DOM }
