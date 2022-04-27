//Array Methods Iteration
//forEach filter map reduce
const arr = [1,4,6,2,3];
//have return type undefined or null
//forEach mutates/change the actual array
arr.forEach(function(value, index) {
   arr[index] = value*value;
});
console.log(arr);
//map wont mutates/change the actual array it creates copy of actual array
const t1 = arr.map(function(value,index) {
    //console.log(value, index);
    return value*2
});
console.log(t1);
console.log(arr);
///customMap
function customMap(arr) {
let newArr = [];
for(let i=0;i<arr.length;i++) {
    newArr.push(arr[i]*2)
}
}






