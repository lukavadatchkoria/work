function randomArray(arr){
    let random = [...new Set(arr)]
    console.log(random);
}
let array = [1,2,3,4,1,1,1,6,5,4];
randomArray(array);