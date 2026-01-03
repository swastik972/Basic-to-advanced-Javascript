//export example 
//using normal export to single variable
export const PI=3.14;
//default export:should be only once in a file 
let radius=34.5;
export default radius;

//exporting mutltiple variable at once 
let x=10;
let y=20;

export{x,y};
//exporting a function 
let calculateAreaofCircle=(radius)=>{
    return PI*radius*radius;
}
let calculatePerimeterofCircle=(diameter)=>{
    return PI*diameter;
}

export {calculateAreaofCircle,calculatePerimeterofCircle};