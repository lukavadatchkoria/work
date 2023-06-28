function random(x, y) {
     let randomInc = Math.floor(Math.random() * (y-x+1)) + x;
     return randomInc;
}
console.log(random(1,5));