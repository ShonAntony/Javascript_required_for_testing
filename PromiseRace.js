// promise race is used for the reason to check which task is completed first and return the result eeven if it is resolved or rejected 


const getData = () =>{
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            resolved("the data is avaliable");
        },500);
    });
};

const getError = () =>{
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            rejected("the data is not avaliable");
        },1500);
    });
};

Promise.race([getData(),getError()])
    .then(result => {
        console.log("result :",result);
    })
    .catch(error => {
        console.log("the error :",error);
    })