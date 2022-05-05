const person = {
    firstName: "test",
    lastName: "testing",
    age: "",
    get fullNameWithThis() {
        this.firstName + this.lastName;
    },
    //fullNameWithThis: undefined,
    set updateNumber(updateNumber) {
        this.mobileNumber = updateNumber;
        //person.mobileNumkber
    }

}

///1123-->{}->2kb
person.updateAge = 1234567890;
console.log(person);
console.log(person.fullNameWithThis);
