// here we will be learning the different ways of declaring an function and using it 

// the first way of declaring a function is given below where you directly use the "function" keyword
function print(){
    console.log("'hi this is just a print statement'");
}

print();
console.log("===========");

 function add(a,b){
    return a+b;
 }

 console.log(add(10,20));
 console.log(add("Shon"," Antony"));
 console.log("===========");

// the second way of declaring a function is function expression : (this is also called as the annonymous function) here we are not defining the function name
// i am creating a function to multi two numbres 
let multi = function (a,b){
    return a*b;
}

console.log(multi(3,3));
console.log("===========");

// the third way of declaring a function expression is the arrow function 
let test = (a,b) => a-b;
console.log(test(5,5));
console.log("===========");

// the fourth way of declaring a function is the function constructor 
// we need to create a function inside the constructor section 
// all the values inside the construnctor has to be string
let add1=new Function ("a","b", "return a+b;");
console.log(add1(10,20));

console.log("===========");


// this is the fifth way of declaring a function is IIFE (Immediately Invoke Function Expression)
(function(){
    console.log("this is an IIFE");
    console.log("the server is up and running properly");
}
)();


// generator function this function will return the iterator values 
// here after the function there needs to be * which needs to be added 
function* generateSequence(){
   yield 1;
   yield 2;
   yield 3;
   yield 4;
   yield 5;
}



let generator = generateSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);



console.log("============")


// the annony function  has no name similar to how the map() is used 
let num = [1,2,3,4,5,6];
let twoTimesNumb=num.map((e) => e*2);
console.log(twoTimesNumb);

// recursive function 
function fact(numb){
    if(numb === 1 || numb === 0){
        return 1;
    }
    else{
        return numb * fact(numb-1);
    }
}

console.log("===========");
console.log(fact(10));
console.log(fact(5));

// higher order function 
function addition(a,b){
    return a+b;
}

function operation(functionName,a,b){
    return  functionName(a,b);
}

console.log(operation(addition,10,20));