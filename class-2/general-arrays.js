let a1 = [1,2,3,4,4,5,9];//0--> indexing
let unsortedArr = [15,10,2,5,6,8,12];
const sortedArr = unsortedArr.sort(function(a,b) {
   return a-b;
})
console.log(sortedArr);
a1.push(1);
//[1]
a1.push(2);
a1.push("34");
a1.pop();//removes last element from array
//console.log(a1);
console.log(a1.indexOf(10));
//console.log(a1.length);