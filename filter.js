// Filter

let myArr = [3, 4, 8, 17, 10];


// Using traditional loop
function returnEvens(arr){
  let newArr = [];
  for(let i = 0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
      newArr.push(arr[i])
    }
  }
  return newArr;
}

// Using Filter

function returnEvensFilter(arr){

  return arr.filter((item)=>{
    return item%2==0;
  });
}

console.log(returnEvensFilter(myArr));
