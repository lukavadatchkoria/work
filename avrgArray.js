let array = [4, 3, 7, 9, 5];
function average(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i];
    }
    return count/arr.length;
}
console.log(average(array));