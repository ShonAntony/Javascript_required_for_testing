
// there are two typws of variables that are there in javascript 
// one is global and the other is local i.e inside the scope of a function 

// here we are going to learn the differnt type of variables that can be create 
// one is using "var(variable)"", "let"  and finally "constant" 

// the example for "var" is given below the reason why the "let" was used is because of some limitations with "var"


//==============================VAR================================================================================//

var x = 10; // this is a global variable which is declared outside the function 

function test(){
    var y =20; // this is a local variable and this is declared inside the function 
}

console.log(x);

// if i need to run this specific script i need to open the terminal and navigate to the specific directory and then type in node(space)the file name
// i.e node variables.js and this will print 10 because we have used the "console.log()" command in this script

// i am declaring another variable below 
var pop="hello JS";

function test2(){
    var top="hi JS";
    console.log(top);
}

// if i am trying to access the variable inside the function that is "top" without accessing the function i will not be able to do it because the scope of the variable is inside that specific fucntion 
// here below if i try to print that variable using console.log() there will be an error stating that the variable is not defined 
//console.log(top);

// now below if i call the "test2()" now it will print the value of the variable "top" which is "Monkey"
test2();
console.log(pop);

// here below if am creating a variable and giving it a value initially and then declaring a variable with the same name the latest value assigned to that variable will be used
// the example for this is given below 

var name = "Shon"; // this is the fist variable 
var name = "Antony"; // this is the second variable with the same name 

// so if i print the value of name the latest value will be printed i.e "Antony"
console.log(name);
// the main thing to be noted is that var allows redeclaration of the same variable and also reinit of the variables as given below 
name = "test";
console.log(name);

// we can directly declare the variable below without any value which is assigned to it as given below 
var g;
// now if i print the "g" then the default value will be undefined as given below 
console.log(g); // undefined 
// now after i assign a value to "g" and then print it then the new value will be printed as given below 
g="test run";
console.log(g); // test run 


//main limitation for "var" is given below if you have declared a variable and then put some condition in which the value is reinit then the old value cannot be used 
var flag = "true";
var t=4;
if(t>3){
    var flag="false";
}
console.log(flag);
// now the original value of flag that is "true" cannot be used 


//==============================LET================================================================================//

let m ="test";
let time=4;
if(time>3){
    let m1 = "test101";  // the scope of "m1" variable is inside this if block 
    console.log(m1); 
}
// console.log(m1); we will not be able to use this "m1" variable outside the block
console.log(m); // test

// so in the above example with var where the variable is declared outside the block gets updated by the var variable inside the block 

// the advantage with let is you can't re-declare 2 variables using let
// but we can re-init the same variable n number of times

let length = 10;
length =20;
console.log(length);

//================================CONSTANT=====================================================================================
// here constants are declared once and it can't be re-init it 
const mes = "test";
//mes = "test";
console.log(mes);


// the default value of a declared varibale is "undefined" be it both using "var" or using "let"
var a ;
let b ;
console.log(a);  // undefined 
console.log(b);  // undefined 

// the value to the constant has to be defined while the constant is declared 

