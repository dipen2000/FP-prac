// given array of string find the number of strings with same number of characters 

const input = ["Apple" , "orange" , "mango" , "papaya" , "BATMAN" , "STEVE JOBS" , "KOBE"];

const result = input.reduce((obj , curr)=>{
        if(obj[curr.length]){
            ++obj[curr.length];
        }
        else{
            obj[curr.length] = 0;
            ++obj[curr.length];
        }
        return obj;
} , {});

console.log(result);