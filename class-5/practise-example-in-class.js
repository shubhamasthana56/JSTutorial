const obj = new Object();
const key = "firstName"
obj.firstName = "Test";
obj.lastName = "testing";
obj.age = 23;
//console.log(obj);
delete obj.age;
delete obj[key];
//console.log(obj);
obj.cars = {category: ["Vintage","Sports",""]}
obj.cars.category.map((value)=> {
    console.log(value)
});

//["firstName", "lastName", "age"]
//["Test", "testing", 23]
const objKeys = []
const objValues = [];
for(let key in obj) {
    objKeys.push(key);
    objValues.push(obj[key]);
}
//console.log(objKeys, objValues)
//console.log(Object.keys(obj))
//console.log(Object.values(obj));