//this = //{}----> {firstName: }
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};//created a blueprint

const father = new Person("John", "witcher", 60);
const mother = new Person("Kelvin", "witcher", 50);
console.log(father.age, mother);

//built in constructor methods
new String();
new Object();
new Array();
new Number();
new Boolean();
new Function();
new Date();
new RegExp();