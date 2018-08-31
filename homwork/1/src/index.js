class PraiseButton{
	constructor(defaultVal,isPraised){
		this.val=0;
		if(defaultVal && typeof defaultVal == 'number' && defaultVal>=0){
			this.val=defaultVal;
		}

		this.isPraised = false;
		if(typeof isPraised == 'boolean' ){
			this.praised=isPraised;
		}

		if(this.isPraised && this.val==0){
			this.val = 1;
		}
	}
	//赞
	praise(){
		!this.isPraised ? this.val++ : this.val--;
		this.isPraised = !this.isPraised;
	}
}
class Thumb extends PraiseButton{
	constructor(defaultVal,isPraised){
		super(defaultVal,isPraised);
		this.defCSSClass = 'praised';
		
	}
	//返回变更html内容的方法
	showPraise(){
		
		var that = this;
		return function(el){
			var currentClass = that.praised ? that.defCSSClass : '';
			$(el).append('<dd ><span class="thumb" title="赞" >b（￣▽￣）d</span><span class="subinfo ' + currentClass + '">' + that.val + '</span></dd>');
			$(el).find(".thumb").on("click",that.press.bind(that));
		}
		
	}
	//点击赞按钮时的事件
	press(e){
		this.praise();
	
		$(e.target).next().text(this.val).toggleClass(this.defCSSClass);

	}
}

//闭包限定命名空间
(function ($) {
    $.fn.extend({
        "thumb":function(options){
        	//检测用户传进来的参数是否合法
            if (!isValid(options)){
                return this;
            }
            var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
            this.each(function () {  //这里的this 就是 jQuery对象
                //遍历所有的要高亮的dom,当调用 thumb()插件的是一个集合的时候。
                var $this = $(this); //获取当前dom 的 jQuery对象，这里的this是当前循环的dom
                //根据参数来设置 dom的样式
				var showPraise = (new Thumb(opts.subinfo,opts.isPraised)).showPraise();
				showPraise(this);
             
            });
            return this;

        }
    });
     //默认参数
    var defaluts = {     
        isPraised : false,
        subinfo : 0
    };
    //私有方法，检测参数是否合法
    function isValid(options) {
        return !options || (options && typeof options === "object") ? true : false;
    }
   
})(window.jQuery);