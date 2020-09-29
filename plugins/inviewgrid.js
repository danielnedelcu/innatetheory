import Vue from 'vue'
import Inview from 'vueinview'

Vue.use(Inview)

function add (element, delay) {
  element.style.animationDelay = delay + 'ms'
}

function batch (target, method) {
  let i, len

  if (typeof target === 'string') {
    const targets = document.querySelectorAll(target)

    for (i = 0, len = targets.length; i < len; i++) {
      // eslint-disable-next-line no-console
      method(targets[i], i * 50)
    }
  }
}

batch('.client__grid-li', add)

const onEnter = (el) => {
  // eslint-disable-next-line no-console
  el.classList.add('in-box-view')
}

Vue.prototype.$inviewgridEnter = onEnter
