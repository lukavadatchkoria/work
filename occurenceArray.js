let arr = ["a", "a", "a", "a", "a", "a", "b" ];
let count = 0;
for (element of arr) {
    if (element === "a") {
        count += 1;
    }
}
console.log(count);