// find the sum of all the odd indices

const arr = [1,2,3,4,5];

const result = arr.reduce((sum , curr , index)=>{
    if(index%2!==0){
        sum = sum + curr;
    }
    return sum;
},0);

console.log(result);