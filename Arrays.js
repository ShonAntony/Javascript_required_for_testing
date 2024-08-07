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


// =========================== CONCAT() ================================================================================
// this is used to combine 2 arrays and make it into one 
let num =[1,2,3];
let num1=[4,5,6];

console.log(num.concat(num1));

// =========================== INDEXOF() ================================================================================
// this is used to get the index of a value in the array 
// it returns -1 if there are no values in the array 

let names1 =["Shon","Santhosh","Antony"];

console.log(names1.indexOf("Shon"))
console.log(names1.indexOf("Santhosh"));
console.log(names1.indexOf("Antony"));

// lets say there are duplicates in the array i.e 
let names2 =["Shon","Santhosh","Antony","Shon"];
console.log(names2.indexOf("Shon"));
// now we know the first occurance to get the next we are going to start the check after the index we have got
console.log(names2.indexOf("Shon",names2.indexOf("Shon")+1));


// =========================== INCLUDES() ================================================================================
// this will just check if the value we have passed is there in the array or not 
let test = ["aaaa","bbbb","cccc","dddd","eeee"];
// this returns a boolean value
// here we can pass more than one value to check if those values are there in the array or not 
console.log(test.includes("aaaa"));
console.log(test.includes("aaaa","dddd"));

// =========================== FOREACH() ================================================================================
// this function is similar to how the for loop works 
console.log("========================");
let n = [1,2,3,4,5,6,7,8,9,0];
// here if you notice we have this function as a part of the array and below "n" is the array and inside the "forEach" we have to give 
n.forEach(element => {
    console.log(element);
});


// =========================== LASTINDEXOF() ================================================================================
// this will return the index of the last matching element in the array

let n1 = [1,2,3,4,5,6,7,8,9,0,2];
console.log(n1.lastIndexOf(2)); // the index is 10 since the last occurance of 2 is at 10th index


// =========================== REVERSE() ================================================================================
// this is used to reverse an entire array 
let arr6 = ["shon","santhosh","antony"];
let reverseArr6 =arr6.reverse();

// =========================== SORT() ================================================================================
// this is used to sort the elements in the alpha order
let brands = ["samsung","lg","oppo","vivo","apple","android"];
console.log(brands.sort());