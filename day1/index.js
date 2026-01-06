// console.log("Hello, Day all") 
//var: functional scope variables
// const :block scope variable
// let:block scope variable

function myfunction(){
    var a= 20;
    console.log("a=",a);
    //block
    if(true){
        var b=30;
        console.log("b=",b);
       
    }
    console.log("b outside block=",b)
}
//function call
// myfunction()
// console.log("outside function:", a);

//block scope example 
for(let i=0;i<3;i++){
    console.log("i=",i);
    const pi=3.14;
}
// console.log("value of pi:",pi);
