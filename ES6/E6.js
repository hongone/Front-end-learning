const arr =[12,34,6,98,12,6];
const result = [...new Set(arr)];
console.log(result);//数组去重

let food  = new Map();
let fruit={},cook=function(){};
food.set(fruit,"梨");
food.set(cook,"饭");
console.log(food.get(cook));
console.log(food.size);
food.delete(fruit);
console.log(food.size);
food.clear();
console.log(food);

(async(){
	function promisefn(url){
		return new Promise(function(resolve,reject){
			$ajax({
				url : url,
				success: function(){
					resolve(response);
				},
				error : function(){
					reject("error");

				}
			});
		});
	}
	const a1 = await promisefn('http://www.xxx.com/a');
	const a2 = await promisefn('http://www.xxx.com/b');
	let p = a1 + a2;
})();

//继承
class SupperClass{
  constructor(x, y){
    this.x=x;
    this.y=y;
  }
  print1(){
    console.log(this.x, this.y)
  }
  getXY(){
    return {x: this.x, y: this.y}
  } 
}
class MyClass extends SupperClass{
  constructor(x,y,z){
    super(x,y);
    this.z=z;
  }
  print(){
    console.log(this.x, this.y, this.z)
  }
}
let myclass = new MyClass(1,2,3)
myclass.print();
