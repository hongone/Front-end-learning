!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="http://127.0.0.1:8888/",e(e.s=2)}([function(t,e,n){"use strict";function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.Star=e.Thumb=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=n(1),f=(function(t){t&&t.__esModule}(c),function(){function t(e){u(this,t),this.num=0,e&&"number"==typeof e&&e>=0&&(this.num=e)}return i(t,[{key:"clickAction",value:function(){this.num=add(this.num),axios.get("/index/post").then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}]),t}()),a=function(t){function e(t){return u(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return r(e,t),e}(f),s=function(t){function e(t){return u(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return r(e,t),e}(f);e.Thumb=a,e.Star=s},function(t,e){},function(t,e,n){n(0),t.exports=n(3)},function(t,e,n){"use strict";window.add=function(t){return++t}}]);