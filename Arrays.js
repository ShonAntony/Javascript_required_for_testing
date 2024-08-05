//Declaration of arrays
let arr1 =[]; // this is an empty array 
let arr2 =[1,2,3,4,5,6,7,8]; // this is an array of numbers
let arr3 =["Shon","Senani","Adarsh","Sahin"]; // this is an array of strings 

let lang = ["JAVA","Python","JS"];

//before 
console.log(lang);

// =========================== PUSH() ================================================================================
// the first method to be talked about is the "push" method using which we can add one or more elements to the end of the array
lang.push("C#","Ruby");

//after 
console.log(lang);

// =========================== POP() ================================================================================
// this method is used to remove the last element from the array 
let numbArr =[1,2,3,4,5,6,7,8]; // this is an array of numbers

//before
console.log(numbArr);

//after 
numbArr.pop(); // this will remove 8 from the array
console.log(numbArr);

// =========================== SHIFT() ================================================================================
// this method will remove the first element from the array and return the same 
// for the same number array we are going to remove the first element using shift()

console.log(numbArr.shift()); // the output here being 1

// =========================== UNSHIFT() ================================================================================
// this adds one or more elements to the start of the array 
let names =["Shon","Senani","Adarsh","Sahin"];

//before 
console.log(names);
names.unshift("Mahesh","Rohan");

//after
console.log(names);

// =========================== SPLICE() ================================================================================
// here using this method we can remove any value from a array given we know the index of that value 
let animals =["Lion","Tiger","Fox","Wolf"];

//before
console.log(animals);

//if i am using the splice() there are 3 parameters that needs to be defined 
// first value is the index from where the elements have to be removed
// second value is number of elements to be removed 
// third value is the value to be replaced at that spot 
animals.splice(0,1,"Cat");

//after
console.log(animals);


// =========================== SLICE() ================================================================================
// this is used to get the subset of an array where in we will be passing the start and end index of the elements which 
let animals1 =["Lion","Tiger","Fox","Wolf"];

// here the last index will be excluded in the below case it is going to take one the 0th and 1st index values
console.log(animals1.slice(0,2));
