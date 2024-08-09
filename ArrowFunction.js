// this video is for the arrow function which is in use
// arrow function is anonymous function 

// here if we notice there is only one parameter that is "number" that is why this entire thing or function can be directly written
const square=number => number * number; // you can even write it like this as well "(number) => number*number;"
console.log(square(2));
console.log("===============================================");

// if there are no parameters which are there we can driectly write the function as given below 
const mess = () => 'hello world';
console.log(mess());
console.log("===============================================");

// if there are multiple parameters for a single function then 
const multi = (a,b) => a*b;
console.log(multi(2,3));
console.log("===============================================");


// here we are just going to take an entire object as a parameter in our function 
// here is an example of JSON object 
const emp = {
    firstName : "Shon",
    lastName : "Antony",
    company : "FireFlink",
    empID : "FFE252",
    age :25 ,
    status : false
}


// here we are just going to create an arrow function which is going to take an JSON object and then perform actions 
// here we use ""``" inbetween this we use a syntax ${theObjectName.ValueInTheObject} example is given as `${person.firstName}`
const values=(person) => `${person.firstName} ${person.lastName} ${person.company} ${person.empID} ${person.age} ${person.status}`;
console.log(values(emp));
console.log("===============================================");


// here we are going to create a function with the default values given to the parameters 
const test = (user="Shon",age=25) => `hello user : ${user} welcome !!!! 
your age is : ${age}`;

// here if you notice if you don't give any parameters then the default is taken
console.log(test());
console.log("===============================================");

// here if we are passing the actual arguments then that will be considered
console.log(test("Santhosh",35));
console.log("==============================================="); 


// rest parameters ... variable arguments that is based on the actual arguments that are passed the functions have to perform 
// the syntax for variable arguments are (...variableName)
const val1=(...numbers) => numbers.reduce((acc,num) => acc+num, 0);
console.log(val1(1,2,3,4,5,6,7,8,9,10));

const test1=(browser='Chrome' , ...details) =>{
    console.log(`the browser in use is : ${browser}`);
    console.log('the details are :', details);
};

console.log(test1("FireFox","this the first detail","this is the second detail","this is the third detial"));

console.log("==============================================="); 
//just to check the max number in the given set of numbers 

const maxVal=(a,b,c) => Math.max(a,b,c);


console.log(maxVal(1,2,4));


