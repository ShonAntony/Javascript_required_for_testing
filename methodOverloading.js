// here method overloading is not possible 
// JS is a loosly typed language i.e compilation happens during the execution of the program but not before the execution 
// like in languages like JAVA,C# etc 

function print(){
    console.log("hi");
}

// print(); even if we call this function it will check the all the functions with the same name and the last function will be used here


function print(name){
    console.log("bye"+ name)
}

function print(name,age){
    console.log("===================================================");
    console.log("hi "+name+" age "+age);
    console.log("===================================================");
}

// here if we try to call the print function both the methods will be overridden by the last method 
// here only the last function will be considered for the execution 

print(); // here the output will be undefined i.e "hi undefined age undefined"
// since we have not provided any default values to the arguments in the the method it will consider the parameters to be undefined 

print("Shon");// here the output will be undefined i.e "hi Shon age undefined"

print("Shon",25);// here the output will be "hi Shon age 25"

// to run the test scripts on the remoteExecution

function browserInfo(browserName,browserVersion,remoteExecution){
    console.log("===================================================");
    if(typeof browserVersion === 'number' && typeof remoteExecution === 'boolean'){
        console.log(`the execution is triggered on "${browserName}" and the version being "${browserVersion}" and the execution status on remote machine is "${remoteExecution}"`);
    }
    else if(typeof browserVersion === 'string'){
        console.log(`the execution is on this browserVersion ${browserVersion}`);
    }
    else{
        console.log(`the browserName is ${browserName}`);
    }
    console.log("===================================================");
}

browserInfo("Chrome",115,true);
browserInfo(115,true);
browserInfo(115);