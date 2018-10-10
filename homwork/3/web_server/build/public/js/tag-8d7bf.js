webpackJsonp([0],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _praisebutton = __webpack_require__(0);

var _praisebutton2 = _interopRequireDefault(_praisebutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var f = new _praisebutton2.default(0);
xtag.register('x-praise', {
    content: '<div id="showzone"><img id="thumb" src="/img/thumb.jpeg" />' + '<span class="hide" id="animation">+1</span>' + '</div>',
    methods: {
        //显示数字动画效果
        praise: function praise(el) {
            var _this = this;

            if (f.num < 10) {
                el.style.setProperty('-webkit-filter', 'grayscale(0)');
                f.clickAction();
                var animation = _this.querySelector("#animation");
                animation.className = "hide num";
                setTimeout(function () {
                    animation.className = "hide";
                }, 800);
            } else {
                el.style.setProperty('-webkit-filter', 'grayscale(1)');
                f.num = 0;
            }
        },
        throttle: function throttle(method, context) {
            if (typeof method.tId != 'undefined') {
                clearTimeout(method.tId);
            }
            method.tId = setTimeout(function () {
                method.call(context);
            }, 500);
        }
    },
    events: {
        click: function click(e) {
            var _this = this;
            if (e.target.id == 'thumb') {
                _this.throttle(_this.praise, e.target);
            }
        }
    }
});

/***/ })

},[4]);