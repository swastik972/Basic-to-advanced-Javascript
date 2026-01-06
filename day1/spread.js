//spread operator 
//Notation: ...
//It is used to expand elements of an iterable (like an array or string) into individual elements.
let arr1=[1,2,3];
let arr2=[4,5,6];
let temp=[...arr1,...arr2];
console.log(temp);
let arr3=[...arr1,...arr2,7,8,9];
console.log(arr3);

//spread operator in object 
let obj1={
    fullName:"Swastik Rawat",
    age:20
}
let obj2={
    address:"Kathmandu",
    city:"Kathmandu",
    ...obj1,
}
let obj3={
    phone:92302298,
    contract:123456,
}
let obj4={...obj1,...obj3};
console.log(obj2);
console.log(obj4);