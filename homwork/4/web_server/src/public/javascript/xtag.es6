import {Thumb} from './praisebutton.es6'
const f = new Thumb(0);
xtag.register('x-praise', {
    content: '<div id="showzone"><img id="thumb" src="/img/thumb.jpeg" />'
       + '<span class="hide" id="animation">+1</span>'
       + '</div>',
    methods : {
        //显示数字动画效果
        praise : function(el){
            let _this = this;
            let thumb = _this.querySelector("#thumb");
            if (f.num < 10) {
                thumb.style.setProperty('-webkit-filter', 'grayscale(0)');
                f.clickAction();
                let animation = _this.querySelector("#animation");
                animation.className = "hide num";
                setTimeout(()=>{
                    animation.className = "hide";
                },800); 
    
            } else {
                
                thumb.style.setProperty('-webkit-filter', 'grayscale(1)');
                f.num = 0;
            }
            
        },
        throttle(method, context) {
            if(typeof method.tId != 'undefined'){
              clearTimeout(method.tId);  
            }            
            method.tId = setTimeout( ()=> { method.call(context); }, 500);
        }
    },
    events: {
        click: function(e){
            let _this = this;
            if(e.target.id=='thumb'){
                _this.throttle(_this.praise,_this); 
            }
        }
    }
});