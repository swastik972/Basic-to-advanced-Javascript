//promise:represent to the future value
//it makes asynchronous program easy 
//resolve:promise will be fullfilled 
//reject:promise will be rejected 
//creating promises
let myPromise=new Promise(
    //callback function
    (resolve,reject)=>{
        let mailePromisePuraGarey=true;
        if(mailePromisePuraGarey){
            resolve("maile baccha kasam pura garey")
        }else {
            reject("I am sorry,maile kasam pura garna sakina ");
        }
    }
)
console.log("before promise");
//consuming promise 
myPromise.then(
    (result)=>{
        console.log(result);
    }
).catch(
    (error)=>{
        console.log("error:",error)
    }
).finally(
    ()=>{
        console.log("always finally called");
    }
);
console.log("after promise");
