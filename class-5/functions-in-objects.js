//this keyword
const person = {
    firstName: "test",
    lastName: "testing",
    age: 23,
    fullName: function(firstName, lastName) {
        return firstName + lastName;
    },
    fullNameWithThis: function() {
        return this.firstName + this.lastName;
    }  
}
console.log(person.fullNameWithThis());