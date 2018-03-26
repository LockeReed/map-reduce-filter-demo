// Reduce
let myArr = ["Hello", " my name is ", "Troy"];

// Using traditional loop
function outputJoined(arr){
  let accum = "";
  for(let i = 0; i<arr.length; i++){
    accum += arr[i];
  }
  return accum;
}

console.log(outputJoined(myArr));

// Using Reduce

function outputJoinedReduce(arr){
  return arr.reduce((accum, item)=>{
    return accum+item;
  });
}

console.log(outputJoinedReduce(myArr));
