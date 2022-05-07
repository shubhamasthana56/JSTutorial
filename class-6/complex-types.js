const a = ()=> {};
function B() {};
console.log(typeof a, typeof B);
console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(B));
console.log(a.prototype);
console.log(B.prototype);