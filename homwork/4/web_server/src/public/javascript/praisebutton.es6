import css from '../css/index.css'
class PraiseButton {
	constructor(num) {
		this.num = 0;
		if (num && typeof num == 'number' && num >= 0) {
			this.num = num;
		}
	}
	clickAction() {
		this.num = add(this.num);
		axios.get('/index/post')
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

}
class Thumb extends PraiseButton{
	constructor(num) {
		super();
	}
}
class Star extends PraiseButton{
	constructor(num) {
		super();
	}
}

export {Thumb,Star} 
