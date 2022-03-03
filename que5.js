// return array where odd num incr by one and even decre by 1

const arr = [1,2,3,4,5];

const result = arr.map((curr)=>{
    return curr%2!==0 ? ++curr : --curr;
});

console.log(result);