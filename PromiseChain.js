// here we are going to use multiple then and catch blocks 

function getEvenNumber(value,delay){

    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            if(value%2==0){
                resolve(value);
            }
            else{
                reject(new Error("the number is not even"));
            }
        },delay)
    });
}

// promise chaining 
getEvenNumber(4,1000)
    .then((result)=>{
        console.log("step 1 : the given number "+result+" is even"); 
        return getEvenNumber(3,2000); // after i write a retun with the getEvenNumber this acts as an input to the next then block 

    })
    .then((result)=>{
        console.log("step 2 : the given number "+result+" is even"); 
    })
    .catch((error)=>{
        console.error("the promise chaining is not happening properly"+error);
    })