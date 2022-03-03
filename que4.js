//find the numbers divisible by 10

const arr = [1,2,3,4,5,10,20];

const result = arr.filter((curr)=>{
   return curr%10==0;
});

console.log(result);