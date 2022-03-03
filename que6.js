// return an object where sum of odd and sum of even like this {odd : 23 , even : 56};

const arr = [1,2,3,4,5];
const oddEvenSum = (obj , curr)=>{
    if(curr%2!==0){
        obj.odd += curr;
    }
    else{
        obj.even += curr;
    }
    return obj;
}

const result = arr.reduce(oddEvenSum,{odd : 0 , even : 0});

console.log(result);