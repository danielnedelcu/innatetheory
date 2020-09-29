class Parallax extends Smooth {

  constructor(opt) {
      super(opt)
      this.createExtraBound()
      this.resizing = false
      this.cache = null
      this.dom.divs = Array.prototype.slice.call(opt.divs, 0)
      

  }

  createExtraBound() {
      ['getCache', 'inViewport']
      .forEach((fn) => this[fn] = this[fn].bind(this))
  }

  resize() {
      this.resizing = true
      this.getCache('cache', this.dom.divs)
      
      super.resize()
      this.resizing = false
  }

  getCache(cacheKey, doms, style) {
      this[cacheKey] = []
      doms.forEach((el, index) => {
          if (!style) {
              el.style.display = 'block'
              el.style.transform = 'none'
          }
          const scrollY = this.vars.target
          const bounding = el.getBoundingClientRect()
          const bounds = {
              el: el,
              state: true,
              top: bounding.top + scrollY,
              left: bounding.left,
              center: bounding.height / 2,
              bottom: bounding.bottom + scrollY,
              speed: el.getAttribute('data-speed') || '0'
          }
          if (index === 4) {

          }
          // this.vars.bounding = bounding.bottom > this.vars.bounding ? bounding.bottom - window.innerHeight : this.vars.bounding;
          this[cacheKey].push(bounds)
      })
      // get bounding value based on the container (.vs-section) height
      if (this.dom && this.dom.section) {
          this.vars.bounding = this.dom.section.getBoundingClientRect().height - (this.vars.native ? 0 : this.vars.height)
      }
  }

  run() {
      super.run()
      
      this.dom.divs.forEach(this.inViewport)
      if (this.dom && this.dom.section) this.dom.section.style[this.prefix] = this.getTransform(this.vars.current * -1)
  }

  inViewport(el, index, addTransform = true, cacheKey = 'cache') {
      //if (!this[cacheKey] || this.resizing) return
      const cache = this[cacheKey][index]
      const current = this.vars.current
      const transform = (cache.top - current) * cache.speed
      const top = Math.round((cache.top + transform) - current)
      const bottom = Math.round((cache.bottom + transform) - current)
      const inview = bottom > 0 && top < this.vars.height

      
      const opacityEnd = Math.max(0, Math.min(1 - transform / (this.vars.height * .5), 1))
      const opacityStart = Math.max(0, Math.min(1 + transform / (this.vars.height  * .7), 1))
      const opacityWork = Math.max(0, Math.min(1.2 + transform / (this.vars.height  * .4), 1))
      const opacityFar = Math.max(0, Math.min(4 + (transform * .5) / (window.innerHeight * .1), 1))
      const opacityTitle = Math.max(0, Math.min(.7 - transform / (window.innerHeight * .3), 1))
      const opacityTitleStart = Math.max(0, Math.min(1.8 + transform / (window.innerHeight * .3), 1))
      

      if (inview) {
          if (addTransform) {
              el.style[this.prefix] = this.getTransform(transform)

              if (el.classList.contains('vs-opacity-end')) {
                  el.style.opacity = opacityEnd.toFixed(2);
              } else if (el.classList.contains('vs-opacity-start')) {
                  el.style.opacity = opacityStart.toFixed(2);
              } else if (el.classList.contains('vs-opacity-work')) {
                  el.style.opacity = opacityWork.toFixed(2);
              }  else if (el.classList.contains('vs-opacity-start-far')) {
                  el.style.opacity = opacityFar.toFixed(2);
              } else if (el.classList.contains('vs-opacity-title')) {
                  el.style.opacity = opacityTitle.toFixed(2);
              } else if (el.classList.contains('vs-opacity-title-start')) {
                  el.style.opacity = opacityTitleStart.toFixed(2);
              }

          } else {
             

          }
      } else {
          if (!addTransform) {
             
          }
      }
  }
}