// call back function --> this function is passed as an argument to another function 


// this is a basic call back function 
// here name and callback are the variable 
// one takes the string as function and the other takes the function as an input 
// so name takes the string and callback takes the method as an input 
function test(name,callback){
    console.log(`hi ${name} to the world of JS`);
    callback();
}

// here we are defining the method that needs to be passed as an argument in the test() 
function welcome(){
    console.log("welcome!!!!!");
}


test("Shon",welcome); // this print the first consol.log() and next it will call the function welcome()
console.log("==================================================================");


// callback with the async function 
function printInfo(name,callback){
    // here i am defining a async function 
    setTimeout(function() {
        console.log(`hi ${name}`);
        callback("dude please call me back !!!!!");
    },1000);
}

function displayMessage(message){
    console.log(message);
}

printInfo("Shon",displayMessage);
console.log("==================================================================");



// here we are going to create 2 functions 

function userData(userID,callback){
    setTimeout(function() {
        const users ={
            1 : {id:1,name:"Shon"},
            2 : {id:2,name:"Antony"},
            3 : {id:3,name:"Santhosh"},
        }

        const user = users[userID];
        if(user){
            callback(null,user);
        }else{
            callback("user not found ....",null);
        }

    },2000);
}


// callback function 
function printUserInfo(error,user){
    if(error){
        console.error("Error :",error);
    }
    else{
        console.log("user :" ,user);
    }
}

console.log("==================================================================");

userData(1,printUserInfo);
userData(5,printUserInfo);