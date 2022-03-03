// return an array with the string which has vowels

const input = ["GCPD" , "BATMAN" , "BRUCE WAYNE"];

const checkElem = (word)=>{
    const upper = word.toUpperCase();
    const vowels = ["A" , "E" , "I" , "O" , "U"];
    let check = false;
    for(vowel of vowels){
        if(upper.includes(vowel)){
            check = true;
            break;
        }
        else{
            check = false;
        }
    }
    return check;
};

const result = input.filter((item)=>{
   return checkElem(item); 
});

console.log(result);
