//what will be the length of this object
const obj = {
    firstName: "david",
    lastName: "baccom",
    age: 40,
    gender: "male"
}
const obj1 = {
    firstName: "david",
    lastName: "baccom",
    age: 40,
}
//console.log(getObjectLength(obj), getObjectLength(obj1) )

function getObjectLength(obj) {
    return Object.keys(obj).length;
}

const temperature = {mumbai: 40, delhi: 42, bhopal: 45, pune: 36, banglore: 32};
//{banglore: 32, pune:36, mumbai:40, delhi:42, bhopal:45}, [banglore, pune, mumbai, delhi, bhopal]

const sortedTemperatureValues = Object.values(temperature).sort(function(a,b){return a-b});
console.log(sortedTemperatureValues);
sortedTemperatureValues.forEach((val)=> {
const key = getKeyByValue(temperature, val);
console.log(key, val);
});
function getKeyByValue(object, value) {
    return Object.keys(object).find((key)=> {
        return object[key] === value;
    })
}