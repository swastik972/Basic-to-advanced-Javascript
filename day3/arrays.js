// //array:collection of a element 
// //rotation:[]
// //creating array:
// let myArr = [90,89,78,67,56]
// //accessing element in some index 
// console.log("element in index 4:",myArr[4]);
// console.log("element in index 2:",myArr[2]);

// //adding new element at last 
// myArr.push(23);
// console.log("new array :",myArr);
// //removing last element 
// myArr.pop();
// console.log("new array is :",myArr);

// //changing element in some index 
// myArr[3]=900
// console.log("new array2:",myArr);

// //length of array 
// console.log("length of array:",myArr.length);

// //normal loop in array 
// // let arr1=[1,2,3,4];
// for(let i=0;i<myArr.length;i++)
// {
//     console.log("index:",i,"element :",myArr[i]);
// }

// //using for - of 
// for (element of myArr){
//     console.log("element:",element);
// }
// //using for -in 
// for(index in myArr){
//     console.log("index:",index,"element:",myArr[index]);
// }
// //using extension function forEach
// myArr.forEach((element,index)=>{
//     //call back function 
//     console.log("index:",index,"element:",element);
// });

// let names=["Anita","Ravi","Swastik","Sachin","Ram"]
// //using mao to modify each element in array 
// let modifiedNames=names.map(
//     (element,index)=>{
//         return element.toUpperCase()
//     }
// )
// console.log("modified names:",modifiedNames);

// //using reduce to accumulate the element in array 
// let numbers =[90,80,70,100,130,140]
// let sum = numbers.reduce(
// (accumulator,element)=>{
// return accumulator +element
// } ,
// 0
// //initial value for accumulator 
// )
// console.log("sum:",sum);
// //max of all elements in array
// let max=numbers.reduce(
//     (accumulator,element)=>{
//         return accumulator<element?accumulator:element;
//     },
// )
// console.log("max value:",max);

// //using find in array:always return first found element 

// let marks =[56,65,23,45,12]
// let foundMarks=marks.find(
//     (ele,index)=>{
//         return ele <25
//     }
// )
// console.log("foundMarks:",foundMarks);

// //delete element in array
// delete marks[1]
// console.log("marks:",marks);

// //assignment todo:slice,splice

// //using filter in array 
// let filteredMarks = marks.filter(
//     (e,i)=>{
//         return e<25
//     }
// )
// console.log("filtered Marks=",filteredMarks);





// const numbers = [1, 2, 3, 4];

// // map creates a new array by applying a function to each element
// const doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6, 8]
// console.log(numbers); // [1, 2, 3, 4] → original unchanged (immutable)




// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// const names = users.map(user => user.name);
// const ages=users.map(user=>user.age);
// console.log(names); // ['Alice', 'Bob', 'Charlie']
// console.log(ages);



// const numbers=[1,2,3,4,5,6]

// // const even=numbers.filter(numbers=>numbers%2===0)
// const even=numbers.reduce((accumulator,curr)=>accumulator+curr,0);
// console.log(even);

// const objects=[{"Non-veg":103,Curd:90,vegetables:120,fruits:150}]

// const products=objects.filter(objects=>objects["fruits"]>100)

// console.log(products);


// const numbers=[1, 34,45,76,3,2]

// const max=numbers.reduce((acc,curr)=>acc>curr?acc:curr)

// console.log(max);





























