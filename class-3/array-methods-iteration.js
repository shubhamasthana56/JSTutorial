//Array Methods Iteration
//forEach filter map reduce

//have return type undefined or null
//forEach mutates/change the actual array
// arr.forEach(function(value, index) {
//    arr[index] = value*value;
// });
// console.log(arr);
// //map wont mutates/change the actual array it creates copy of actual array
// const t1 = arr.map(function(value,index) {
//     //console.log(value, index);
//     return value*2
// });
// console.log(t1);
// console.log(arr);
// ///customMap
// function customMap(arr) {
// let newArr = [];
// for(let i=0;i<arr.length;i++) {
//     newArr.push(arr[i]*2)
// }
// }
//reduce first will be callback and second parameter will be default value
const arr = [1,4,6,2,3];
//for sum
// const sum = arr.reduce(function(accumulator, current){
//     return accumulator + current;
// }, 0);
// //for product
// const product = arr.reduce(function(accumulator, current){
//     console.log(accumulator, current);
//     return accumulator * current;
// }, 1);
// console.log(sum, product);
//filter
const filteredResponse = arr.filter(function(val) {
    return val > 10;
});
console.log(filteredResponse);

function customFilter(callback) {
    let arr = []
    if(callback) {
        arr.push(val)
    }
    return arr;
  
}
// customFilter(function(){});
// customFilter(function(){return something})
   








