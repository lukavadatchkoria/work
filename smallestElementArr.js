let arr = [2,3,4,5,4,9,10,6];
function descend(array){
    let descendedArray = array.sort((a,b) => b-a);
    return descendedArray[descendedArray.length-1];
}
console.log(descend(arr));