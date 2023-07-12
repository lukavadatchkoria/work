function str(str) {
    let splitString = str.split("")
    let reverseArray = splitString.reverse();
    let reverseJoin = reverseArray.join("");
    return reverseJoin;

}
console.log(str("bruh"));