import Vue from 'vue'
import Inview from 'vueinview'

Vue.use(Inview)

const onEnter = (el) => {
  el.classList.add('in-box-view')
}

Vue.prototype.$inviewlistEnter = onEnter
