// here we are going to use map() , filter() and reduce() on the array 

//=================================== MAP() ===============================================================================
// here the map() is going to return a new array with the necessary changes that needs to be done 

let arr1 = [1,2,3,4,5,6];
// here it acts like a forEach() where it takes the elements in the array and then perform the operations on the same 
let arrTimesTwo=arr1.map((e) => e*2);
console.log(arrTimesTwo);

// using this function for a real time example 
let far = [100,101,102,103,104,105,106];
// below i am using the map() to convert the above array into cel value
let cal=far.map((e) => (e-32)*(5/9));
// now i am going to print the "cal" array 
console.log(cal);


// here we can do the same thing in a different way that is creating a function and calling that function in the map()
function convert(fah){
    return (fah-32)*(5/9);
}
// here we are just going to pass the function as an argument here and each value from the list will undergo some operations inside the 
// function and it will return each value and that value is stored in a new array 

// here we don't need to add the function "convert()" like this we can just pass the name here 
let cal2 = far.map(convert);
console.log("============");
console.log(cal2); 


//=================================== FILTER() ===============================================================================
// the next function which is in use is the filter() 
// here any conditions can be passed and if the element is meeting the condition then that element is added to the new array 
// here is an example which is given below 

let num = [1,2,3,4,5,6,7,8,9];
let even=num.filter((e) => e%2 === 1);

console.log(even);

// here we can use the filter function as given below to filter out the men who are older than 30 
// here we have delcared an array of objects form which i am filtering out the values or the employees with sepcific critia 

let employee = [
    {name : "Shon" , age : 25 ,gender : "Male"},
    {name : "Santhosh" , age : 35 ,gender : "Male"},
    {name : "Antony" , age : 70 ,gender : "Male"},
    {name : "Feeee" , age : 25 ,gender : "Female"},
    {name : "Abbbb" , age : 33 ,gender : "Female"}
]

let menAboveThirty= employee.filter((emp) =>{
     return emp.gender === "Male" && emp.age >25;
});

console.log(menAboveThirty);

//=================================== REDUCE() ===============================================================================
// the next function under discussion is reduce()
// lets just say that if i need the sum of all the elements in an array instead of using looping statements we can use this function 

let numb =[1,2,3,4,5];

// here if you notice the "acc" value is the one which is storing the value of sum in this case and "ele" is the number which is taken from the array 
// here there are three factors which are in place one is "(acc,ele)"  the next is the action after the what action has to be performed "acc+ele" and finally the init value of acc needs to be declared 

let sumOfAllTheValues=numb.reduce((acc,ele) => acc+ele,0);

console.log(sumOfAllTheValues);

let numb1 = [5,19,56,99,200];

// to check the max number 
// here max will accum the return value based on the condition 
let val=numb1.reduce((max,num) => {
    if(num>max){
        return num;
    }
    else{
        return max;
    }
},numb1[0]);

console.log(val);


// here i am going to create an array of object which consists of name of the object and the price of the object 

let itemAndPrice = [
    {name : "item1", price : 500},
    {name : "item2", price : 1000},
    {name : "item3", price : 400},
    {name : "item4", price : 1500},
    {name : "item5", price : 500},
    {name : "item6", price : 50}    
]

let total=itemAndPrice.reduce((totalCost,ele) => {
    return totalCost+ele.price;
},0);

console.log(total);


//=================================== EVERY() ===============================================================================
// this will return a boolean value if all the elements in the array satisfy the condition 
let arr4 = [1,2,3,4,5,6];
let flag = arr4.every((e)=> e<10);
console.log(flag);

//=================================== SOME() ===============================================================================
// this is the opposite of every() 
let arr5 = [1,20,2,4,5,3,6];
let flag1 = arr5.some((e) => e%2 === 0);
console.log(flag1);

//=================================== FIND() ===============================================================================
// this will return the fist value from an array which meets the condition given
let test = [1,3,4,5,6];
let value=test.find((e) => e%2 === 0);
console.log(value);
