//Named functions
function testScope() {
    var t1 = 3;
    console.log(t1)
    const pie = 3.14;
    if(t1 > 1) {
        let t2 = 4;
        console.log(t2,t1);
    }
    console.log(t2,t1);
}
testScope();




//IIFE(Immediately invoked functions)