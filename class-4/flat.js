const arr = [1,2,3,5,[4,5,6,[7,8,9,[10,11,12]]]];
//[1,2,3,4,5,6,7,8,9];
//flat
//console.log(arr.flat(5), arr)
//customFlat
///Iterate the array -----
//                        |->is it array or not
//custom(current/updated)
//else
//directly push into an array
let flattenArr = [];
function customFlat(arr) {
    for(let i=0;i<arr.length;i++) {
        if(Array.isArray(arr[i])) {
            customFlat(arr[i]);
        } else {
            flattenArr.push(arr[i])
        }
    }
}
customFlat(arr);
console.log(flattenArr);

function flatten(arr){
    const newarr = arr.reduce((acc,item) =>{
        if(Array.isArray(item)){
            acc = acc.concat(flatten(item));
        }else{
            acc.push(item)
        }
        return acc;
    }, []);
    return newarr;
}







