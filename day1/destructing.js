let student= ["Swastik","Ram","Shyam","Hari"];
//destructing array 
let [a,b,c,d]=student
console.log(a,b,c,d);

//destructing object 
let obj={
    name:"Swastik",
    age:20,
    address:"Bhaktrapur",
    city:"bhaktapur",
    state:"Bagmati"
}
let {name,age,address,city,state}=obj
console.log(name,age,address,city,state);

// let arr=["Apple","Banana","Mango","Orange"];
// let [a,b,c,d]=arr;
// console.log(a,b,c,d);