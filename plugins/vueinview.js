import Vue from 'vue'
import Inview from 'vueinview'
import { gsap } from 'gsap'
import { Power4 } from 'gsap/gsap-core.js'
//import { SplitText } from 'gsap/SplitText'
import { SplitText } from '../utils/SplitText'
import { CSSPlugin } from 'gsap/CSSPlugin'

gsap.registerPlugin(SplitText)
gsap.registerPlugin(CSSPlugin)
Vue.use(Inview)

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-use-before-define
const onEnter = (el) => {
  const tlParent = gsap.timeline()
  const tlParentParagraph = gsap.timeline()
  const splitTextArr = []

  // eslint-disable-next-line no-unused-vars
  let { st1, st2 } = {}
  st2 = new SplitText(el.getElementsByClassName('split__headline')[0], { type: 'lines', linesClass: 'lineParent' })

  st2.lines.forEach((elParent, i) => {
    st1 = new SplitText(elParent, { type: 'lines', linesClass: 'lineChild' })
    // eslint-disable-next-line no-console
    splitTextArr.push(st1)
  })

  el.classList.add('in-text-view')

  function revertParagraph (e) {
    st2.revert()

    e.forEach((splitText, i) => {
      splitText.revert()
    })
  }
  gsap.set(el.getElementsByClassName('split__headline')[0], { opacity: 1 })

  tlParent.from(el.getElementsByClassName('lineChild'), 1, {
    stagger: 0.1,
    y: '100%',
    delay: 0.02,
    ease: Power4.easeInOut,
    onComplete: revertParagraph,
    onCompleteParams: [splitTextArr]
  })

  tlParentParagraph.to(el.getElementsByClassName('split__paragraph')[0], 1, {
    opacity: 1,
    delay: 0.4,
    ease: Power4.easeInOut
  })
}

Vue.prototype.$inviewEnter = onEnter
