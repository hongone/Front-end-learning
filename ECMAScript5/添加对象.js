"use strict";
var  nums={
    "first" :7,
    "second" :  14
}
var test = Object.keys(nums);
console.log(test);

function Shape(){
    this.x = 0;
    this.y = 0;
}

Shape.prototype.move = function(x,y){
    this.x += x;
    this.y += y;
    console.info("Shape moved");
}
function Rectangle(){
    Shape.call(this);
}
Rectangle.prototype =Object.create(Shape.prototype);
console.log(Shape.prototype );
console.log(Rectangle.prototype );
var rect = new Rectangle();

rect.move(1,1);
var tobj =Object.create(Shape);
console.log(tobj);
console.log(tobj.prototype);

