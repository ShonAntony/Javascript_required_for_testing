// here the Promise.allSettled() is used for getting both the rejected as well as the resolved values along with the status 

// for example 
// [
//     { status: 'fulfilled', value: 'the data is avaliable' },
//     { status: 'rejected', reason: 'the data is not avaliable' }
// ]




const function1 = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This is the data from function 1");
            
            
        },1000);
    });
};


const function2 = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This is the data from function 2");
        },1000);
    });
};

const function3 = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This is the data from function 3");
           
        },1000);
    });
};


Promise.allSettled([function1(),function2(),function3()])
    .then((allData) =>
        {
            console.log("this is all the data from the different functions : ", allData);
        }
    )
    .catch(error=>{
        console.log(error);
    });

console.log("=======================================================================");



// [
//     { status: 'fulfilled', value: 'the data is avaliable' },
//     { status: 'rejected', reason: 'the data is not avaliable' }
// ]

const getData = () =>{
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            resolved("the data is avaliable");
        },1000);
    });
};

const getError = () =>{
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            rejected("the data is not avaliable");
        },1000);
    });
};

Promise.allSettled([getData(),getError()])
    .then(results => {
        results.forEach(result => {
            if(result.status == 'fulfilled'){
                console.log("value :",result.value);
            }
            else{
                console.error("Error :" , result.reason);
            }
        })
    })
    