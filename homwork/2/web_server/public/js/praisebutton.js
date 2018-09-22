'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function PraiseButton(num) {
	_classCallCheck(this, PraiseButton);

	this.num = 0;
	if (num && typeof num == 'number' && num >= 0) {
		this.num = num;
	}
};

var Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb(num, el) {
		_classCallCheck(this, Thumb);

		var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num));

		_this.el = el;

		return _this;
	}
	//点击效果


	_createClass(Thumb, [{
		key: 'clickAction',
		value: function clickAction() {
			var _this2 = this;

			// this.el.click(() => {
			// 	if (this.num < 10) {
			// 		this.el.css('-webkit-filter', 'grayscale(0)');
			// 		this.showAnim();

			// 	} else {
			// 		this.el.css('-webkit-filter', 'grayscale(1)');
			// 		this.num = 0;
			// 	}
			// 	//console.log(this);


			// });
			this.el.click(function () {
				_this2.throttle(_this2.buttonclick, _this2);
			});
		}
	}, {
		key: 'buttonclick',
		value: function buttonclick() {
			if (this.num < 10) {
				this.el.css('-webkit-filter', 'grayscale(0)');
				this.showAnim();
			} else {
				this.el.css('-webkit-filter', 'grayscale(1)');
				this.num = 0;
			}
			//console.log(this);
		}
	}, {
		key: 'update',
		value: function update() {
			axios.get('/index/praise').then(function (response) {
				console.log(response);
			}).catch(function (error) {
				console.log(error);
			});
		}
		//显示数字动画效果

	}, {
		key: 'showAnim',
		value: function showAnim() {
			$('#animation').addClass('num');
			this.num = add(this.num);
			setTimeout(function () {
				$('#animation').removeClass('num');
			}, 1000);
			console.log(this);
			this.update();
		}
	}, {
		key: 'throttle',
		value: function throttle(method, context) {
			clearTimeout(method.tId);
			method.tId = setTimeout(function () {
				method.call(context);
			}, 800);
		}
	}]);

	return Thumb;
}(PraiseButton);

exports.default = Thumb;
