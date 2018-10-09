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
		axios.get('/index/praise')
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

}


export default PraiseButton 
