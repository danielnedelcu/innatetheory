var Smooth = function () {
  function Smooth() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}

      _classCallCheck(this, Smooth)

      this.createBound()
      this.options = opt
      this.prefix = (0, _prefix2.default)('transform')
      this.rAF = undefined
      // It seems that under heavy load, Firefox will still call the RAF callback even though the RAF has been canceled
      // To prevent that we set a flag to prevent any callback to be executed when RAF is removed
      this.isRAFCanceled = false
      var constructorName = this.constructor.name ? this.constructor.name : 'Smooth'
      this.extends = typeof opt.extends === 'undefined' ? this.constructor !== Smooth : opt.extends
      this.callback = this.options.callback || null
      this.vars = {
          direction: this.options.direction || 'vertical',
          native: this.options.native || false,
          ease: this.options.ease || 0.075,
          preload: this.options.preload || false,
          current: 0,
          last: 0,
          target: 0,
          height: window.innerHeight,
          width: window.innerWidth,
          bounding: 0,
          timer: null,
          ticking: false
      }
      this.vs = this.vars.native ? null : new _virtualScroll2.default({
          limitInertia: this.options.vs && this.options.vs.limitInertia || false,
          mouseMultiplier: this.options.vs && this.options.vs.mouseMultiplier || 1,
          touchMultiplier: this.options.vs && this.options.vs.touchMultiplier || 1.5,
          firefoxMultiplier: this.options.vs && this.options.vs.firefoxMultiplier || 30,
          preventTouch: this.options.vs && this.options.vs.preventTouch || true
      })
      this.dom = {
          listener: this.options.listener || document.body,
          section: this.options.section || document.querySelector('.vs-section') || null,
          scrollbar: this.vars.native || this.options.noscrollbar ? null : {
              state: {
                  clicked: false,
                  x: 0
              },
              el: (0, _domCreateElement2.default)({
                  selector: 'div',
                  styles: 'vs-scrollbar vs-' + this.vars.direction + ' vs-scrollbar-' + constructorName.toLowerCase()
              }),
              drag: {
                  el: (0, _domCreateElement2.default)({selector: 'div', styles: 'vs-scrolldrag'}),
                  delta: 0,
                  height: 50
              }
          }
      }
  }

  _createClass(Smooth, [{
      key: 'createBound',
      value: function createBound() {
          var _this = this;

          ['run', 'calc', 'debounce', 'resize', 'mouseUp', 'mouseDown', 'mouseMove', 'calcScroll', 'scrollTo'].forEach(function (fn) {
              return _this[fn] = _this[fn].bind(_this)
          })
      }
  }, {
      key: 'init',
      value: function init() {
          this.addClasses()
          this.vars.preload && this.preloadImages()
          this.vars.native ? this.addFakeScrollHeight() : !this.options.noscrollbar && this.addFakeScrollBar()
          this.addEvents()
          this.resize()
      }
  }, {
      key: 'addClasses',
      value: function addClasses() {
          var type = this.vars.native ? 'native' : 'virtual'
          var direction = this.vars.direction === 'vertical' ? 'y' : 'x'
          _domClasses2.default.add(this.dom.listener, 'is-' + type + '-scroll')
          _domClasses2.default.add(this.dom.listener, direction + '-scroll')
      }
  }, {
      key: 'preloadImages',
      value: function preloadImages() {
          var _this2 = this

          var images = Array.prototype.slice.call(this.dom.listener.querySelectorAll('img'), 0)
          images.forEach(function (image) {
              var img = document.createElement('img')
              _domEvents2.default.once(img, 'load', function () {
                  images.splice(images.indexOf(image), 1)
                  images.length === 0 && _this2.resize()
              })
              img.src = image.getAttribute('src')
          })
      }
  }, {
      key: 'calc',
      value: function calc(e) {
          var delta = e.deltaY
          this.vars.target += delta * -1
          this.clampTarget()
      }
  }, {
      key: 'debounce',
      value: function debounce() {
          var _this3 = this

          var win = this.dom.listener === document.body
          this.vars.target = this.vars.direction === 'vertical' ? win ? window.scrollY || window.pageYOffset : this.dom.listener.scrollTop : win ? window.scrollX || window.pageXOffset : this.dom.listener.scrollLeft
          clearTimeout(this.vars.timer)
          if (!this.vars.ticking) {
              this.vars.ticking = true
              _domClasses2.default.add(this.dom.listener, 'is-scrolling')
          }
          this.vars.timer = setTimeout(function () {
              _this3.vars.ticking = false
              _domClasses2.default.remove(_this3.dom.listener, 'is-scrolling')
          }, 200)
      }
  }, {
      key: 'run',
      value: function run() {
          if (this.isRAFCanceled) return
          this.vars.current += (this.vars.target - this.vars.current) * this.vars.ease
          this.vars.current < .1 && (this.vars.current = 0)
          this.requestAnimationFrame()
          if (!this.extends) {
              this.dom.section.style[this.prefix] = this.getTransform(-this.vars.current.toFixed(2))
          }
          if (!this.vars.native && !this.options.noscrollbar) {
              var size = this.dom.scrollbar.drag.height
              var bounds = this.vars.direction === 'vertical' ? this.vars.height : this.vars.width
              var value = Math.abs(this.vars.current) / (this.vars.bounding / (bounds - size)) + size / .5 - size
              var clamp = Math.max(0, Math.min(value - size, value + size))
              this.dom.scrollbar.drag.el.style[this.prefix] = this.getTransform(clamp.toFixed(2))
          }
          if (this.callback && this.vars.current !== this.vars.last) {
              this.callback(this.vars.current)
          }
          this.vars.last = this.vars.current
      }
  }, {
      key: 'getTransform',
      value: function getTransform(value) {
          return this.vars.direction === 'vertical' ? 'translate3d(0,' + value + 'px,0)' : 'translate3d(' + value + 'px,0,0)'
      }
  }, {
      key: 'on',
      value: function on() {
          var requestAnimationFrame = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true

          if (this.isRAFCanceled) {
              this.isRAFCanceled = false
          }
          var node = this.dom.listener === document.body ? window : this.dom.listener
          this.vars.native ? _domEvents2.default.on(node, 'scroll', this.debounce) : this.vs && this.vs.on(this.calc)
          requestAnimationFrame && this.requestAnimationFrame()
      }
  }, {
      key: 'off',
      value: function off() {
          var cancelAnimationFrame = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true

          var node = this.dom.listener === document.body ? window : this.dom.listener
          this.vars.native ? _domEvents2.default.off(node, 'scroll', this.debounce) : this.vs && this.vs.off(this.calc)
          cancelAnimationFrame && this.cancelAnimationFrame()
      }
  }, {
      key: 'requestAnimationFrame',
      value: function (_requestAnimationFrame) {
          function requestAnimationFrame() {
              return _requestAnimationFrame.apply(this, arguments)
          }

          requestAnimationFrame.toString = function () {
              return _requestAnimationFrame.toString()
          }

          return requestAnimationFrame
      }(function () {
          this.rAF = requestAnimationFrame(this.run)
      })
  }, {
      key: 'cancelAnimationFrame',
      value: function (_cancelAnimationFrame) {
          function cancelAnimationFrame() {
              return _cancelAnimationFrame.apply(this, arguments)
          }

          cancelAnimationFrame.toString = function () {
              return _cancelAnimationFrame.toString()
          }

          return cancelAnimationFrame
      }(function () {
          this.isRAFCanceled = true
          cancelAnimationFrame(this.rAF)
      })
  }, {
      key: 'addEvents',
      value: function addEvents() {
          this.on()
          _domEvents2.default.on(window, 'resize', this.resize)
      }
  }, {
      key: 'removeEvents',
      value: function removeEvents() {
          this.off()
          _domEvents2.default.off(window, 'resize', this.resize)
      }
  }, {
      key: 'addFakeScrollBar',
      value: function addFakeScrollBar() {
          this.dom.listener.appendChild(this.dom.scrollbar.el)
          this.dom.scrollbar.el.appendChild(this.dom.scrollbar.drag.el)
          _domEvents2.default.on(this.dom.scrollbar.el, 'click', this.calcScroll)
          _domEvents2.default.on(this.dom.scrollbar.el, 'mousedown', this.mouseDown)
          _domEvents2.default.on(document, 'mousemove', this.mouseMove)
          _domEvents2.default.on(document, 'mouseup', this.mouseUp)
      }
  }, {
      key: 'removeFakeScrollBar',
      value: function removeFakeScrollBar() {
          _domEvents2.default.off(this.dom.scrollbar.el, 'click', this.calcScroll)
          _domEvents2.default.off(this.dom.scrollbar.el, 'mousedown', this.mouseDown)
          _domEvents2.default.off(document, 'mousemove', this.mouseMove)
          _domEvents2.default.off(document, 'mouseup', this.mouseUp)
          this.dom.listener.removeChild(this.dom.scrollbar.el)
      }
  }, {
      key: 'mouseDown',
      value: function mouseDown(e) {
          e.preventDefault()
          e.which == 1 && (this.dom.scrollbar.state.clicked = true)
      }
  }, {
      key: 'mouseUp',
      value: function mouseUp(e) {
          this.dom.scrollbar.state.clicked = false
          _domClasses2.default.remove(this.dom.listener, 'is-dragging')
      }
  }, {
      key: 'mouseMove',
      value: function mouseMove(e) {
          this.dom.scrollbar.state.clicked && this.calcScroll(e)
      }
  }, {
      key: 'addFakeScrollHeight',
      value: function addFakeScrollHeight() {
          this.dom.scroll = (0, _domCreateElement2.default)({
              selector: 'div',
              styles: 'vs-scroll-view'
          })
          this.dom.listener.appendChild(this.dom.scroll)
      }
  }, {
      key: 'removeFakeScrollHeight',
      value: function removeFakeScrollHeight() {
          this.dom.listener.removeChild(this.dom.scroll)
      }
  }, {
      key: 'calcScroll',
      value: function calcScroll(e) {
          var client = this.vars.direction == 'vertical' ? e.clientY : e.clientX
          var bounds = this.vars.direction == 'vertical' ? this.vars.height : this.vars.width
          var delta = client * (this.vars.bounding / bounds)
          _domClasses2.default.add(this.dom.listener, 'is-dragging')
          this.vars.target = delta
          this.clampTarget()
          this.dom.scrollbar && (this.dom.scrollbar.drag.delta = this.vars.target)
      }
  }, {
      key: 'scrollTo',
      value: function scrollTo(offset) {
          if (this.vars.native) {
              this.vars.direction == 'vertical' ? window.scrollTo(0, offset) : window.scrollTo(offset, 0)
          } else {
              this.vars.target = offset
              this.clampTarget()
          }
      }
  }, {
      key: 'resize',
      value: function resize() {
          var prop = this.vars.direction === 'vertical' ? 'height' : 'width'
          this.vars.height = window.innerHeight
          this.vars.width = window.innerWidth
          if (!this.extends) {
              var bounding = this.dom.section.getBoundingClientRect()
              this.vars.bounding = this.vars.direction === 'vertical' ? bounding.height - (this.vars.native ? 0 : this.vars.height) : bounding.right - (this.vars.native ? 0 : this.vars.width)
          }
          if (!this.vars.native && !this.options.noscrollbar) {
              this.dom.scrollbar.drag.height = this.vars.height * (this.vars.height / (this.vars.bounding + this.vars.height))
              this.dom.scrollbar.drag.el.style[prop] = this.dom.scrollbar.drag.height + 'px'
          } else if (this.vars.native) {
              this.dom.scroll.style[prop] = this.vars.bounding + 'px'
          }
          !this.vars.native && this.clampTarget()
      }
  }, {
      key: 'clampTarget',
      value: function clampTarget() {
          this.vars.target = Math.round(Math.max(0, Math.min(this.vars.target, this.vars.bounding)))
      }
  }, {
      key: 'destroy',
      value: function destroy() {
          if (this.vars.native) {
              _domClasses2.default.remove(this.dom.listener, 'is-native-scroll')
              this.removeFakeScrollHeight()
          } else {
              _domClasses2.default.remove(this.dom.listener, 'is-virtual-scroll')
              !this.options.noscrollbar && this.removeFakeScrollBar()
          }
          this.vars.direction === 'vertical' ? _domClasses2.default.remove(this.dom.listener, 'y-scroll') : _domClasses2.default.remove(this.dom.listener, 'x-scroll')
          this.vars.current = 0
          this.vs && (this.vs.destroy(), this.vs = null)
          this.removeEvents()
      }
  }])

  return Smooth
}()

exports.default = Smooth

window.Smooth = Smooth