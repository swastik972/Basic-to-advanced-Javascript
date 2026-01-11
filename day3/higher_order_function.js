// higher order function : a function that takes function as argument or return function 

// res=(a*b)/c

let multiply=(a,b)=>{
    return a*b
}

// Calculate expression is higher order function with multiplyfunc and dividefun as an fucntion parameter
let calculateExpression=(a,b,c,multiplyfunc,dividefunc)=>{   
    let multiplyresult=multiplyfunc(a,b)
    let divideresult=dividefunc(multiplyresult,c)
    return divideresult

}

// calling higher order function 
let res=calculateExpression(
    34,56,78,
    multiply,
    (Mres,c)=>{
        return Mres/c
    }
)
console.log("final res",res)

// higher order function that returns function 

let createModulusCalculator=(dividend)=>{
    return (a)=>{
        return a% dividend
    }
}

let myRemFunc=createModulusCalculator(45);
let remres=myRemFunc(100)
console.log("remRes:",remres)