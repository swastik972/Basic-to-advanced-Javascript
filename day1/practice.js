//rest operator combines multiple elements into a single array
//notation...
//example without using rest operator
let add= (a,b,c,d,e,f,g,h,i,j,k,l,m,n)=>{
    return a+b+c+d+e+f+g+h+i+j+k+l+m+n;
}
let result = add(1,2,3,4,5,6,7,8,9,10,11,12,13,14);
console.log(`result without rest operator :${result}`);
//using rest operator 
let add1= (...numbers)=>{
//  let sum=0;
//  for(let i=0;i<numbers.length;i++){
//     sum+=numbers[i];
// }
// return sum;
return numbers.reduce(
    (accumulator, currentnum) => {return accumulator + currentnum},
    0
);
}
// //calling the function with rest operator 
// let result1 = add1(1,2,3,4,5,6,7,8,9,10,11,12,13,14);
// console.log(`result with rest operator:${result1}`);


