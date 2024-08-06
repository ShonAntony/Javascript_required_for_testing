// While loop , Do-While and for loop 


// for loop 
// the below is a simple for loop
for(let i=0;i<10;i++){
    console.log(i);
}

// in java we have for-each loop in java similarly we have the same in javascript as well
// for...of loop:
console.log("========");
const arr = [1,2,3,4,5,6,7];
for (const e of arr) {
    console.log(e);
}

//iterating through a list without using the for...of loop:
console.log("========");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


// while loop 
console.log("========");
let p = 1;
while (p<=10) {
    console.log(p);
    p++;
}

// do while loop 
let t=1;
console.log("========");
do{
 console.log(t);
 t++;
}
while(t<1)
// this will execute atleast once 


// break statement 
console.log("========");
for(let i=0;i<5;i++){
    if(i==3){
        console.log(i);
        break;
    }
    console.log(i)
}


const browserArr=["Chrome","FireFox","Edge","Opera"];

console.log("======");
for (const browser of browserArr) {
    //console.log(browser);
        if(browser=="FireFox"){
            console.log("launching "+browser+" browser !!!!!!");
            break;
        }
}

// if we are using for...in loop: we can access the index of each element in the list 
console.log("======");
for (const br in browserArr) {
    console.log(br); // this will give the index of the list        
}

console.log("======");
for (const br in browserArr) {
    console.log(br+" -> "+browserArr[br]);        
}






// here we can create an object in the JSON format
const user ={
    "Name":"Shon Antony",
    "Age":25,
    "Company":"FireFlink",
    "Experiance":"2 years",
    "Phone Number": 1234567890
}

console.log("======");


// here if i want to iterate through a JSON object i need to use ["for...in loop:"] instead of ["for...of loop:"] we are using "in" instead of "for"
// here we use in to get all the keys in the "user" object.
for (const key in user) {
    console.log(key+" : "+user[key]);
}

//forEach() here we can use this to iterate through the 
console.log("======");
let array =  ["Shon","Santhosh","Antony","Empty"];
array.forEach((element) => {
    console.log(element); 
});