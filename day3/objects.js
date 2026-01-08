//objects:key:value pair or json data 
//notation:{}
//declaring object 
let myObj={
    "fullName":"Swastik",
    age:20,
    address:"kathmandu",
    year:2026,
    "isSingle":true,
}
//accessing value from key 
//1.using bracket notation 
let fn=myObj["fullName"]
console.log("fullName:",fn);
//2.dot notation (recommended)
let address =myObj.address
console.log("address:",address);
//adding new key:value pair 
myObj.country="Nepal"
console.log("my object:",myObj);
myObj.age=20;
console.log("Upload my object",myObj);

//deleting key:value pair 
delete myObj.isSingle;
console.log("after deletion:",myObj);


//converting object (key:value pair)to object(array)
//converting to keys array 
let keysArray =Object.keys(myObj);
console.log("keys array:",keysArray);
//converting to values array 
let values =Object.values(myObj)
console.log("values:",values);
//converting to entries [key,value]array
let entries =Object.entries (myObj)
console.log("entries:",entries);
//assignment:todo use forEach for all of the above and use destructing for entries inside forEach