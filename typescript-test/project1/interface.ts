interface ILabelValue {
    label: string;
}
function printLabel(lableObject: ILabelValue) {
    console.log(lableObject.label);
}
var myobj = { label: "hello" };
printLabel(myobj);
//接口方法
interface ISearchFunc {
    (source: string, subString: string): boolean;
}
var mySearch: ISearchFunc;
mySearch = function (source: string, subString: string) {
    var result = source.search(subString);
    if (result != -1) {
        return true;
    } else {
        return false;
    }
}
console.log(mySearch('abcd', 'd'));
//接口数组
interface IStringArray {
    [index: number]: string;
}
var myArray: IStringArray;
myArray = ["Tom", "Jarrey"];
console.log(myArray[1]);

//接口类 实现
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date):void;
}
class Clock implements ClockInterface {
    currentTime : Date;
    constructor(){
        this.currentTime = new Date();
    }
    setTime(d: Date) {
        this.currentTime = d;
    }
    getTime(){
        return this.currentTime.toTimeString();
    }
}

let clock = new Clock();
clock.setTime(new Date());
console.log(clock.getTime());


//接口继承
interface Shape{
    color : String;
}
interface PenStroke{
    penWith: number;
}
interface Square extends Shape,PenStroke{
    sideLength : number;

}
var s =<Square>{}
s.color='blue';
s.sideLength = 10;
s.penWith = 10;
console.log(s);