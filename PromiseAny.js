// if there are miultiple promises then it will wait till the first promise is resolved 
// it will retun the fulfilled peomise  
// if all are getting rejected then all of the rejected errors will be pulled up as an array 

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
        },200);
    });
};

const getUser = () =>{
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            resolved("the data is not avaliable");
        },1500);
    });
};

Promise.any([getData(),getError()])
    .then(result => {
        console.log("result :",result);
    })
    .catch(error => {
        console.log("the error :",error);
    })