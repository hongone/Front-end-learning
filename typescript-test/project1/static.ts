class Person {
    static color: string;
    tell() {
        console.log('1');
    }

}
Person.color = 'green';
console.log(Person.color);