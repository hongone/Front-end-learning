//多个装饰器和执行顺序  f(g(x))
function f() {
    console.log("f(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {}
}

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
// Greeter.prototype.a =1;
console.log("Greeter:");
let greeter = new Greeter("Tom");
for (var i in greeter) {
    console.log(i);
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        //enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
        descriptor.enumerable = value;
    };
}

class Greeter2 {
    private greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}
console.log("Greeter2:");
let greeter2 = new Greeter2("Janney");
for (var i in greeter2) {
    console.log(i);
}
console.log(Object.keys(greeter2));
console.log(greeter2.propertyIsEnumerable('greeting'));
console.log(greeter2.propertyIsEnumerable('greet'));

console.log(greeter2.greet());