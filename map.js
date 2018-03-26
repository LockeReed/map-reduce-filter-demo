// Map

let arr = [5, 8, 10];

// What if I wanted to double every element?

for(let i = 0; i<arr.length; i++){
  arr[i]*=2;
}

console.log(arr);

// Is there another way?

arr = [5, 8, 10];

let newArr = arr.map((item)=>{
  return item * 2;
});

console.log(newArr);
