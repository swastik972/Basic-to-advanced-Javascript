//arrow function or anonymous function
//the function without name 
//syntax: (parameters)=>{function body}
//all variables are made with let,const and var is always the dynamically typed variable
//dynamically typed means:the variable made with let,const and var doesn't have its data type so its type is defined by what type of data is given.
let display = () => {
console.log("hello world");
}
// function call 

// inline or single line arrow function
let add= (a,b)=>a+b 
let result= add(12,23);
    console.log(`result of odd:${result}`);

//multi line arrow function
let divide= (a,b)=>{
    if(b==0){
        return "infinity"
    }
    return a/b;
}
let dres = divide(20,0);
console.log(`result of divide:${dres}`);
let dres1 = divide(20,4);
console.log(`result of divide :${dres1}`);

