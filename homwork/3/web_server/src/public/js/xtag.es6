import PraiseButton from './praisebutton'
const f = new PraiseButton(0);
xtag.register('x-praise', {
    content: '<div id="showzone"><img id="thumb" src="/img/thumb.jpeg" />'
       + '<span class="hide" id="animation">+1</span>'
       + '</div>',
    methods : {
        //显示数字动画效果
        praise : function(el){
            let _this = this;
            
            if (f.num < 10) {
                el.style.setProperty('-webkit-filter', 'grayscale(0)');
                f.clickAction();
                let animation = _this.querySelector("animation");
                animation.className = "hide num";
                setTimeout(()=>{
                    animation.className = "hide";
                },800); 
    
            } else {
                el.style.setProperty('-webkit-filter', 'grayscale(1)');
                f.num = 0;
            }
            
        },
        throttle(method, context) {
            if(method.tId){
              clearTimeout(method.tId);  
            }            
            method.tId = setTimeout( ()=> { method.call(context); }, 500);
        }
    },
    events: {
        click: function(e){
            let _this = this;
            if(e.target.id=='thumb'){
                _this.throttle(_this.praise(e.target),_this); 
            }
        }
    }
});