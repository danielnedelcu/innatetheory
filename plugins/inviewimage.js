import Vue from 'vue'
import Inview from 'vueinview'

Vue.use(Inview)

const onEnter = (el) => {
  // eslint-disable-next-line no-console
  el.classList.add('in-view')
}

Vue.prototype.$inviewImageEnter = onEnter
