(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{523:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(151);var o=e(190);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},525:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r=function(data){return[{hid:"description",name:"description",content:data.description},{hid:"og:description",name:"og:description",content:data.description},{hid:"twitter:description",name:"twitter:description",content:data.description},{hid:"og:title",name:"og:title",content:data.title},{hid:"og:url",property:"og:url",content:data.url}]}},526:function(t,n,e){"use strict";var r=e(530),o=e(114),c=e.n(o),d=function(){return c.a.create({baseURL:"https://api.storyblok.com/v1/cdn/stories/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}})};n.a={getData:function(t){return d().get("?starts_with=".concat(t,"&version=draft&token=").concat(r.a))},getPost:function(t){return d().get("".concat(t,"?version=draft&token=").concat(r.a))}}},530:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));var r="L47YFTFClMjlR9yQTxVPVwtt",o=2},686:function(t,n,e){"use strict";e.r(n);e(31);var r=e(4),o=e(523),c=e(525),d=e(526),f={components:{LargeHeroWithText:e(534).a},data:function(){return{title:""}},head:function(){return{title:"Innate Theory | Cloud Infrastructure",author:this.author,meta:Object(o.a)(Object(c.a)({title:"Innate Theory | Cloud Infrastructure",url:this.url,description:"Innate Theory Cloud Infrastructure"}))}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.getPost("cloud");case 2:return n=t.sent,e=n.data.story.content,console.dir(e),r=function(t,n){return t.reduce((function(t,n){return n}),{})},t.abrupt("return",{heroObj:r(e.hero.filter((function(t){return"large-hero"===t.component})))});case 7:case"end":return t.stop()}}),t)})))()}},l=e(9),component=Object(l.a)(f,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",[n("LargeHeroWithText",{attrs:{data:this.heroObj}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);