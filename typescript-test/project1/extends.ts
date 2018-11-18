class Human {
    private name : string;
    age : number;
    constructor(name:string,age:number){
        this.name =name;
        this.age = age;
    }
    tell() {
        console.log(this.name + '+' + this.age);
    }
    protected getName() :string {
        return this.name;
    }
    protected setName(name : string)  {
        this.name = name;
    }
}
class Teacher extends Human{
    color : string;
    constructor(name:string,age:number,color:string){
        super(name,age);
        this.color = color;
    }
    tell(){
        console.log(this.getName() + '+' + this.age + '+' + this.color);
    }
}
let teacher = new Teacher('Tom',30,'green');
teacher.tell();
