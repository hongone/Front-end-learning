interface ILabelValue{
    label : string;
}
function printLabel(lableObject : ILabelValue){
    console.log(lableObject.label);
}
var myobj = {label : "hello"};
printLabel(myobj);