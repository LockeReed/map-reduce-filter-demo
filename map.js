// Map

let arr = [5, 8, 10];

// What if I wanted to double every element?
function doubleAll(arr){
  for(let i = 0; i<arr.length; i++){
    arr[i]*=2;
  }
}


console.log(doubleAll(arr));

// Is there another way?

arr = [5, 8, 10];


function doubleMap(arr){
  return arr.map((item)=>{
    return item * 2;
  });
}


console.log(doubleMap(arr));
