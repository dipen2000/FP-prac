// return an array of objects with key as item and value as the no. characters in the string 

const input = ["BRUCE WAYNE" , "BATMAN"];

const result = input.reduce((arr , curr)=>{
    let obj = {};
    obj["item"] = curr.length;
    arr.push(obj);
    return arr;
},[]);

console.log(result);