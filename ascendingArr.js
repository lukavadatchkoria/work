let arr = [2,3,4,5,4,9,10,6];
function ascend(array){
    let ascendedArray = array.sort((a,b) => a-b);
    return ascendedArray;
}
console.log(ascend(arr));
