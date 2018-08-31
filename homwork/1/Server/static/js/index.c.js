'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
	function PraiseButton(defaultVal, isPraised) {
		_classCallCheck(this, PraiseButton);

		this.val = 0;
		if (defaultVal && typeof defaultVal == 'number' && defaultVal >= 0) {
			this.val = defaultVal;
		}

		this.isPraised = false;
		if (typeof isPraised == 'boolean') {
			this.isPraised = isPraised;
		}

		if (this.isPraised && this.val == 0) {
			this.val = 1;
		}
	}
	//赞


	_createClass(PraiseButton, [{
		key: 'praise',
		value: function praise() {
			!this.isPraised ? this.val++ : this.val--;
			this.isPraised = !this.isPraised;
		}
	}]);

	return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb(defaultVal, isPraised) {
		_classCallCheck(this, Thumb);

		var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, defaultVal, isPraised));

		_this.defCSSClass = 'praised';

		return _this;
	}
	//返回变更html内容的方法


	_createClass(Thumb, [{
		key: 'showPraise',
		value: function showPraise() {

			var that = this;
			return function (el) {
				var currentClass = that.isPraised ? that.defCSSClass : '';
				$(el).append('<dd ><span class="thumb" title="赞" >b（￣▽￣）d</span><span class="subinfo ' + currentClass + '">' + that.val + '</span></dd>');
				$(el).find(".thumb").on("click", that.press.bind(that));
			};
		}
		//点击赞按钮时的事件

	}, {
		key: 'press',
		value: function press(e) {
			this.praise();

			$(e.target).next().text(this.val).toggleClass(this.defCSSClass);
		}
	}]);

	return Thumb;
}(PraiseButton);

//闭包限定命名空间


(function ($) {
	$.fn.extend({
		"thumb": function thumb(options) {
			//检测用户传进来的参数是否合法
			if (!isValid(options)) {
				return this;
			}
			var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
			this.each(function () {
				//这里的this 就是 jQuery对象
				//遍历所有的要高亮的dom,当调用 thumb()插件的是一个集合的时候。
				var $this = $(this); //获取当前dom 的 jQuery对象，这里的this是当前循环的dom
				//根据参数来设置 dom的样式
				var showPraise = new Thumb(opts.subinfo, opts.isPraised).showPraise();
				showPraise(this);
			});
			return this;
		}
	});
	//默认参数
	var defaluts = {
		isPraised: false,
		subinfo: 0
	};
	//私有方法，检测参数是否合法
	function isValid(options) {
		return !options || options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object" ? true : false;
	}
})(window.jQuery);
