class PraiseButton {
	constructor(num) {
		this.num = 0;
		if (num && typeof num == 'number' && num >= 0) {
			this.num = num;
		}
	}
	//显示数字动画效果
	showNum() {
		$('#animation').addClass('num');
		this.num = add(this.num);
		setTimeout(() => { $('#animation').removeClass('num') }, 1000);
		console.log(this);
	}
}
class Thumb extends PraiseButton {
	constructor(num, el) {
		super(num);
		this.el = el;

	}
	//点击效果
	clickAction() {
		this.el.click(() => {
			if (this.num < 10) {
				this.el.css('-webkit-filter', 'grayscale(0)');
				this.showNum();

			} else {
				this.el.css('-webkit-filter', 'grayscale(1)');
				this.num = 0;
			}
			//console.log(this);


		});


	}

}

export default Thumb 
