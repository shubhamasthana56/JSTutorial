//static and dynamic type
///variable in javascript or datatype in javascript
var test1; //undefined
const test2;
let test3;
var test = null;
///boolean Null undefined Number String Symbol-----> pass by value
//object----> pass by reference
//Array, , {}--->object
{"0": [1,2,3,4]}
var byValue = 2, "dsafsfd", true;
var byRefernce = {firstName: "Testing"};
function (2--->byValue)
function(byReference--->reference);
const pie = 3.14;
var studentData = {firstName: "t1"}
studentData = {firstName: "t1", firstName: "t2"}

{}--->block in javascript
function() {
    let test2 = "functionvalue";---> function scope
    if() {
        let test4 = "random"
        var test3 = "hjkd"---> blockScope
    }
    for() {}
    else{}
}-----> function

function outer() {
    function inner() {
        var innert1 = ""
    }

}

//operators in JS
Arithmetic---> -, +, *, /, %, ++, --, **
Assigment----> =
var x = 0;
x = x + 5;
x += 5;
-=
*=

//function

 function add(a, b) {
     return a + b;
 } 