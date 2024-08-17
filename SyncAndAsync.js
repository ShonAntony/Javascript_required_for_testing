// here there are two things which are in place 
// Sync --> here if there are 10 API requests then what happens is the process of interaction happens one after the other 
// the sync API's have another name that is known as the "Blocking API's"
// Async --> here if there are 10 API requests then what happens is all the API's will work independent of the previous one 
// the Async API's have another name that is known as the "Non-Blocking API's"

// we use the Sync API's then there has to be some inter-dependency between the previous API call and the next API call 
// we use the Async API's where is no inter-dependency between the list of API calls 



// just to give an example for sync function 
console.log("start");
for(let i=0;i<10;i++){
    console.log(i);    // here all it should print all the values from 1->9 in step by step process only once this is done will it will print the end statement 
}
console.log("end");

console.log("============================================================");

// just to give an example for the Async function 
// here start will be printed and then print end and after 2 seconds the message in the timeout function 
console.log("start");
setTimeout(()=>{
    console.log("this will be printed after 2 seconds");
},2000)
console.log("end");

console.log("============================================================");







