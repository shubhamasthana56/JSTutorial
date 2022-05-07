function Person() {
    this.name = "Maria",
    this.age = 23
}

const person1 = new Person();
console.log(person1.gender);
Person.prototype.gender = "male";
console.log(Person.gender);