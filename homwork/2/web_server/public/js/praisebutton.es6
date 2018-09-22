class PraiseButton {
	constructor(num) {
		this.num = 0;
		if (num && typeof num == 'number' && num >= 0) {
			this.num = num;
		}
	}

}
class Thumb extends PraiseButton {
	constructor(num, el) {
		super(num);
		this.el = el;

	}
	//点击效果
	clickAction() {
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
		this.el.click(() => {this.throttle(this.buttonclick,this) });


	}
	buttonclick(){
		if (this.num < 10) {
			this.el.css('-webkit-filter', 'grayscale(0)');
			this.showAnim();

		} else {
			this.el.css('-webkit-filter', 'grayscale(1)');
			this.num = 0;
		}
		//console.log(this);

	}
	update() {
		axios.get('/index/praise')
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	//显示数字动画效果
	showAnim() {
		$('#animation').addClass('num');
		this.num = add(this.num);
		setTimeout(() => { $('#animation').removeClass('num') }, 1000);
		console.log(this);
		this.update();
	}

	throttle(method, context) {
		clearTimeout(method.tId); 
		method.tId = setTimeout(function () { method.call(context); }, 800);
	}

}

export default Thumb 
