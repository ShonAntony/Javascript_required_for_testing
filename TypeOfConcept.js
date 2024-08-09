// here we are going to discuss about the "typeOf" concept 

x = 22;
console.log(typeof x);
console.log("=====================================");

x = "Shon Antony";
console.log(typeof x);
console.log("=====================================");

x ={
    name : "Shon"
};
console.log(typeof x+ " for object");
console.log("=====================================");

const arr =  [1,2,3,4,5,6,7,8,9];
console.log(typeof arr+" for array");
console.log("=====================================");

const y = null ;
console.log(typeof y+" for null");
console.log("=====================================");

let j;
console.log(typeof j); // this will be undefined 
console.log("=====================================");

function print(){
    console.log("hi my name is shon");
}
console.log(typeof print); "function" // this will be a function 
console.log("=====================================");
