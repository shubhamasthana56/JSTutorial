////
const t1 = [1, "test", 2, 4,7];
const t2 = {firstName: "test", lastName: "Testing"};
//"aba" "atrahjs
//palindrome
//basic for loop
for(let i=0; i<t1.length; i++) {
    console.log(t1[i], "basic for");
}
//for in loop
for( let i in t1 ) {
    console.log(i, "-->for in")
}
for( let key in t2 ) {
    console.log(key,t2[key], "-->for in object")
}

//for of
for( let key of t1 ) {
    console.log(key, "-->for of object")
}



