import {Star} from './praisebutton.es6'
const f = new Star(0);
xtag.register('x-star', {
    content: '<div id="showzone"><div id="star-six" ></civ>'
       + '<span class="hide" id="animation">+1</span>'
       + '</div>',
    methods : {
        //显示数字动画效果
        praise : function(el){
            let _this = this;
            let thumb = _this.querySelector("#star-six");
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
            if(e.target.id=='star-six'){
                _this.throttle(_this.praise,_this); 
            }
        }
    }
});