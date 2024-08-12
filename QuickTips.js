// to get the uinque values from the array 
const arr1 =[1,2,4,5,2,1,4,5,6,7,8];
const uinqueArr = [...new Set(arr1)]; // here what is happening is that we are trying to store all the values into the set which stores only unique
// values 
console.log(uinqueArr);
console.log("===============================================");

// to convert int to string 
const num = 32;
const stringNum = num+"";
console.log(typeof stringNum);
console.log(stringNum);
const stringNum1 = String(num);
console.log(typeof stringNum1);
console.log(stringNum1);
console.log("===============================================");

// tp convert a float into an integer 
const floatValue  = 33.33;
const intValue = parseInt(floatValue);
console.log(typeof intValue);
console.log(intValue);
console.log("===============================================");

// to check the type of the variable 
const val = 20;
if(typeof val === "number" && !isNaN(val)){
    console.log("the value is a number");
}
else{
    console.log("the value is not a number");
}
console.log("===============================================");


// if you want to swap a number without any third variable ;
let a = 10; // we need to use let instead of const to swap the values 
let b = 20;
[a,b] = [b,a];
console.log(a,b);
console.log("===============================================");

// check if the object has a specific property 
const p = {
    name : "Shon",
    age : 25
}

if(p.hasOwnProperty('name')){
    console.log("this property is avaliable in the object");
}
else {
    console.log("this property is not avaliable in the object");
}

console.log("===============================================");

// remove falsy values from an array (false,0,"",null,undefined,NaN)
const arr3 = [1,2,3,'',0,NaN,false,null,undefined,4];
const newArr=arr3.filter(Boolean);
console.log(newArr);
console.log("===============================================");

// convert the string into an uppercase and a lowercase
const name1 = "Shon Antony";
const upperCaseName =name1.toUpperCase();
const lowerCaseName =name1.toLowerCase();
console.log(`for the given string "${name1}" upper-case "${upperCaseName}" and the lower-case "${lowerCaseName}"`);
console.log("===============================================");

// check if the array contains a specific value
const arr4 = ["java","javascript","python","C#"];
if(arr4.includes("java")){
    console.log("the specific value is present in the array");
}
else{
    console.log("the specific value is not there in the array");
}
console.log("===============================================");

// check if the specific array is an empty array 

const emptyArr =[];
if(emptyArr.length === 0){
    console.log("the array is an empty array");
}
console.log("===============================================");

// generate a random number 
const minNumb =10;
const maxNumb =200;
const randomNumb = Math.floor(Math.random()*(maxNumb -minNumb +1))+minNumb;
console.log(`random number that is generated is  : ${randomNumb}`);
console.log("===============================================");

// to convert a string into an number
const stringNum2 = "32";
const num3 =  parseFloat(stringNum2);
console.log(num3); 
console.log(`the value ${num3} is converted and the type of it is : `+typeof num3);
console.log("===============================================");

// join the elements in an array into a string using the join()
const arr5 = ["Shon","Antony","is","my","name"];
console.log(`we are joining the elements in [${arr5}] to get sentence : `+arr5.join(" ")); // inside the join function we need to pass the seperation paramenter like a space
console.log("===============================================");

// to get the object property 
const user = {
    name : "Shon",
    gender : "Male",
    age : 25,
    country : "India",
    hobbies : ["sketching","football","beatboxing"]
}

console.log(user['name']);
console.log(user['hobbies']);
console.log("===============================================");

// cloning an array or an object
// the three dots is known as the spread operator 
const arr6 = [1,2,3,4,5,6,7,8,9,10];
const copyArr = [...arr6];
console.log(`the copied array is : [${copyArr}]`);
console.log("===============================================");
// to make a copy of the user object we are going to use the same 
const user1 = {
    name : "Shon",
    gender : "Male",
    age : 25,
    country : "India",
    hobbies : ["sketching","football","beatboxing"]
}
// instead of the square brackets we are going to use {}
const copyUser={...user1};
console.log(copyUser);
console.log("===============================================");

// convert an object into an array 
// for keys
const userKeyArray=Object.keys(user1);
console.log(userKeyArray);
console.log("===============================================");
// for values
const userValueArray=Object.values(user1);
console.log(userValueArray);
console.log("===============================================");
// for getting an array of key value pair 
const keyValueArray = Object.entries(user1);
console.log(keyValueArray);
console.log("===============================================");

// to get the current date and time 
const currentDate = new Date();
console.log(currentDate.toLocaleString());
console.log("===============================================");

// check if the variable is defined or not 
let a1;
if(typeof i === 'undefined'){
    console.log("the variable is not being defined");
}
console.log("===============================================");

// we can truncate the entire array 
const arr7 = [1,2,3,4,5,6,7,8,9,10];
arr7.length = 3;
console.log(arr7);
console.log("===============================================");