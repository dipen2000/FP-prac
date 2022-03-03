// Find the sm of all the odd numbers using reduce()

const arr = [1,2,3,4,5];

const result = arr.reduce((sum , curr)=>{
    if(curr%2!==0){
        sum = sum + curr;
    }
    return sum;
},0);

console.log(result);