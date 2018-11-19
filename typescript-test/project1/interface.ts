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
    currentTime: string;
    setTime(d: string):void;
}
class Clock implements ClockInterface {
    currentTime : string;
    constructor(){
        this.currentTime = '';
    }
    setTime(d: string) {
        this.currentTime = d;
    }
    getTime(){
        return this.currentTime;
    }
}

let clock = new Clock();
clock.setTime('23:14');
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