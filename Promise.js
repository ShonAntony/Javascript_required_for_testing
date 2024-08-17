// promise is used for an async function basically anything which takes time to process and fetch the values should not stop
// the other process which are happening 
 
// there are three stages in the promise  --> pending , fulfiled or rejected 

// here it can resolve or be rejected 
// we do have a class named "Promise" using the variable of this class we are going check the thing

const randomNumbPromise=new Promise((resolve,reject) =>{

    const randNumb = Math.random();

    setTimeout(()=>{
        if(randNumb > 0.2){
            resolve(randNumb);  // this will be used up in the then block 
        }
        else{
            reject(new Error("the values is too small !!!!!!")); // this will be used up im the catch block 
        }
    },2000);



});

randomNumbPromise
    .then((result)=>{  // these are nothing but the handlers 
        console.log(`the random number is ${result} and the promise is fulfilled`);
    })
    .catch((error)=>{
        console.error(`the error is ${error} and the promise was not fulfilled`);
    });
