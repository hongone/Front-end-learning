webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _praisebutton = __webpack_require__(0);

var f = new _praisebutton.Thumb(0);
xtag.register('x-praise', {
    content: '<div id="showzone"><div id="thumb"  /></div>' + '<span class="hide" id="animation">+1</span>' + '</div>',
    methods: {
        //显示数字动画效果
        praise: function praise(el) {
            var _this = this;
            var thumb = _this.querySelector("#thumb");
            if (f.num < 10) {
                thumb.style.setProperty('-webkit-filter', 'grayscale(0)');
                f.clickAction();
                var animation = _this.querySelector("#animation");
                animation.className = "hide num";
                setTimeout(function () {
                    animation.className = "hide";
                }, 800);
            } else {

                thumb.style.setProperty('-webkit-filter', 'grayscale(1)');
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
                _this.throttle(_this.praise, _this);
            }
        }
    }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _praisebutton = __webpack_require__(0);

var f = new _praisebutton.Star(0);
xtag.register('x-star', {
    content: '<div id="showzone"><div id="star-six" ></civ>' + '<span class="hide" id="animation">+1</span>' + '</div>',
    methods: {
        //显示数字动画效果
        praise: function praise(el) {
            var _this = this;
            var thumb = _this.querySelector("#star-six");
            if (f.num < 10) {
                thumb.style.setProperty('-webkit-filter', 'grayscale(0)');
                f.clickAction();
                var animation = _this.querySelector("#animation");
                animation.className = "hide num";
                setTimeout(function () {
                    animation.className = "hide";
                }, 800);
            } else {

                thumb.style.setProperty('-webkit-filter', 'grayscale(1)');
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
            if (e.target.id == 'star-six') {
                _this.throttle(_this.praise, _this);
            }
        }
    }
});

/***/ })
],[4]);