//Functor（函子）遵守一些特定规则的容器类型。

//1.任何具有map方法的数据结构，都可以当作函子的实现。
class Functor{
	constructor(val){
		this.val = val;
	}
	//一般约定，函子的标志就是容器具有map方法。该方法将容器里面的每一个值，映射到另一个容器。
	map(f){
		return new Functor(f(this.val));
	}
}
//函数式编程一般约定，函子有一个of方法，用来生成新的容器。
Functor.of = function(val) {
   return new Functor(val);
};
Functor.of(2).map(function(two){
	return two +2;
});
Functor.of(2).map(x=>x+1).map(x=>'Result is' + x);
var pre = Functor.of(2);
pre.map(x=>x+1).map(x=>'Result is' + x);
console.log(pre);

class Maybe extends Functor{
	map(f){
		return this.val ? Maybe.of(f(this.val)) : Maybe.of(null);
	}
	
	
}
/*
Maybe.of(null).map(function(s){
	return s.toUpperCase();
});
*/

Maybe.of(null).map(function(s){
	return s +1;
});
Maybe.of(null);
//错误处理、Either
//条件运算if...else是最常见的运算之一，函数式编程里面，使用 Either 函子表达。
//Either 函子内部有两个值：左值（Left）和右值（Right）。右值是正常情况下使用的
//值，左值是右值不存在时使用的默认值。
class Either extends Functor{
	constructor(left,right){
		super();
		this.left = left;
		this.right = right;
	}
	map(f){
		return this.right?Either.of(this.left,f(this.right)) : Either.of(f(this.left),this.right);
	}
}
Either.of = function(left,right){
	return new Either(left,right);
}

var addOne = function (x) {
return x + 1;
};
Either.of(5, 6).map(addOne);
// Either(5, 7);
Either.of(1, null).map(addOne);
// Either(2, null);
//Either.of({address: 'xxx'}, currentUser.address).map(updateField);

//AP因子
// 函子里面包含的值，完全可能是函数。我们可以想象
// 这样一种情况，一个函子的值是数值，另一个函子的值是函数。

var addTwo =function(x){
	return x + 2;
}
class Ap extends Functor{
	map(f){
		return Ap.of(this.val(f.val));
	}
}
Ap.of =function(val){
	return new Ap(val);
}
Ap.of(addTwo).map(Functor.of(2));  
//Ap {val: 4}


//IO
// 1.真正的程序总要去接触肮脏的世界。
// 2.IO 跟前面那几个 Functor 不同的地方在于，它的 __value 是一个函数。
// 它把不纯的操作（比如 IO、网络请求、DOM）包裹到一个函数内，从而
// 延迟这个操作的执行。所以我们认为，IO 包含的是被包裹的操作的返回
// 值。
// 3.IO其实也算是惰性求值。
// 4. IO负责了调用链积累了很多很多不纯的操作，带来的复杂性和不可维
// 护性

// Monad 函子的作用是，总是返回
// 一个单层的函子。它有一个
// flatMap方法，与map方法作用相
// 同，唯一的区别是如果生成了一
// 个嵌套函子，它会取出后者内部
// 的值，保证返回的永远是一个单
// 层的容器，不会出现嵌套的情况。
// 如果函数f返回的是一个函子，那
// 么this.map(f)就会生成一个嵌
// 套的函子。所以，join方法保证
// 了flatMap方法总是返回一个单层
// 的函子。这意味着嵌套的函子会
// 被铺平（flatten）。
class Monad extends Functor {
	join() {
		return this.val;
	}
	flatMap(f) {
		return this.map(f).join();
	}
}