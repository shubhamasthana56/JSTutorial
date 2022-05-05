//simpler or literal
const exampleKey = "Gender"; 
let obj1 = {firstName: "", lastName: ""};
obj1.age = 23;
obj1.exampleKey = exampleKey;
obj1["firstName"] = "Test";
obj1[exampleKey] = "Male/Female";
//new
const obj2 = new Object();

obj1 = obj2;
//1001-->{type: "testing"}
//1001-->{}
console.log(obj1);
obj1.age = 23;
obj2.type = "testing";
console.log(obj1, obj2);