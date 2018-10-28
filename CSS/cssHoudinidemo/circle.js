class Circle{
    constructor(){

    }
    static get inputProperties(){
        return ['--circle-color'];
    }
    paint(ctx,paintSize,properties){
        
        //确定圆心和半径
        const x = paintSize.width / 2;
        const y = paintSize.height /2;
        const radius = Math.min(x,y);

        //填充颜色
        const color=properties.get('--circle-color');
        
        ctx.fillStyle= color;
       
        ctx.beginPath();
        ctx.arc(x,y,radius,0,2*Math.PI,false);
        ctx.fill();
        //画正方型
        ctx.fillStyle= 'yellow';
        ctx.fillRect(0,0,50,50);
        //在右上角画 L
        ctx.beginPath();
        ctx.moveTo(paintSize.width - 80,20);
        ctx.lineTo(paintSize.width - 80,100);
        ctx.lineTo(paintSize.width -30,100);
        ctx.strokeStyle="green";
        ctx.stroke();

    }
}
registerPaint('circle',Circle);