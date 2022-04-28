const arr = [1,2,4,5];
const arr1 = [1,2,4,5,6];
const strArray = ["s","t", "r"];
//splice slice
const r = arr.splice(0,2);//1st argument 2nd no. of delete
const s = arr1.slice(0,2);//
console.log(arr, r,s, arr1);
//Array.isArray
console.log(Array.isArray(strArray), typeof arr);
//join
console.log(strArray.join("!"))
//cocatenation
console.log(arr.concat(arr1));

