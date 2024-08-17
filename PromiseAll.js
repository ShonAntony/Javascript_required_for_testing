// this is the first condidtion 
// here we are getting all the values to be resolved 
// Fun1= resolved
// Fun2= resolved
// Fun3= resolved

const function1 = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("This is the data from function 1");
            const data = [1,2,3,4,5];
            resolve(data);
        },1000);
    });
};


const function2 = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("This is the data from function 2");
            const data = [6,7,8,9,10];
            resolve(data);
        },1000);
    });
};

const function3 = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("This is the data from function 3");
            const data = [11,12,13,14,15];
            resolve(data);
        },1000);
    });
};


Promise.all([function1(),function2(),function3()])
    .then((allData) =>
        {
            console.log("this is all the data from the different functions : ", allData);
        }
    )
    .catch(error=>{
        console.log(error);
    });


// this is the second condition 
// here one function is getting resolved and the other is getting rejected 
// Fun1 = resolved 
// Fun2 = rejected 

// here if both of the promises are getting resolved only then the entire promise all will be resolved but if one gets rejected then the output will be rejected


const getData = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This is the data from getData");
        },1000);
    });
};


const getError = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("this is an error "));
        },1000);
    });
};

Promise.all([getData(),getError()])
    .then(result => {
        console.log("this the resolved value :",result);
    })
    .catch(error =>{
        console.log("the is the error :",error);
    })

