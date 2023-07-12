function removeElement(array, e){
    const freshArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== e) {
            freshArray.push(array[i]);
        }
    }
    return freshArray;
}
let result = removeElement([1,2,3,4,5], 2);
console.log(result);