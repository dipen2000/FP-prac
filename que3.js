// find the biggest number in the array 

const arr = [1,2,3,4,5];

const result = arr.reduce((max,curr)=>{
    if(curr > max){
        max = curr;
    }
    return max;
} , arr[0])

console.log(result);