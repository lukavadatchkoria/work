function combowombo(string) {
    let combinationArr = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = i+1; j < string.length + 1; j++) {
                combinationArr.push(string.slice(i, j));
        }
    }
    return combinationArr;
}
console.log(combowombo('dog'));