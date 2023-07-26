function greatestLowest(arr) {
    // in ascending
    arr.sort((a, b) => a-b);
    
    // index 1 is 2 which is the second lowest number so we take that 
    let secondLowest = arr[1];
    
    // we reverse the array to descending order and in this case index 1 is 4 which is the second greatest number
    let reversedArr = arr.reverse();
    let secondGreatest = reversedArr[1];
    
    // and we return secondlowest 2 and secondgreatest 4
    return [secondLowest, secondGreatest];
  }
  console.log(greatestLowest([1,2,3,4,5]));