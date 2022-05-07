console.log(this);
const obj1 = {
    firstName: "test",
    lastName: "testing",
    fullName: ()=> {
        console.log(this);
    },
    obj2: {
        firstName: "testingobj2",
        fullName2: function() {
            console.log(this)
        }
    }
}

obj1.fullName();
obj1.obj2.fullName2();