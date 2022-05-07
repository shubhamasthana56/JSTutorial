//q1
function Person() {
    this.name = "John"
}
Person.prototype.age = 20;
const person1 = new Person();
Person.prototype = {age: 50};
const person2 = new Person();
console.log(person1.age, person2.age);
//q2
function Human() {
    this.name= "I am human"
}
Human.prototype.age = 23;
Human.prototype.name= "I am not";
const human1 = new Human();
console.log(human1.__proto__);