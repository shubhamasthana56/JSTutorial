//named function
function add(val1, val2) {
    var addedNumbers = val1 - val2;
    console.log(addedNumbers)
    return addedNumbers;
}//function defination

(function() {
    console.log("This is IIFE")
}());
//Anonymous e
// setTimeout(function() {
//     console.log("Trying anonymous function")///callback
// }, 1000)

/////this will be of type function
function ourOwnSet(t) {
    t()
    //post timer it is going to call callback
    
}
ourOwnSet(function() {

})











