// immutability principle indicates that we should not change the state of an object
// // instead of chaning the state of an object,we should create a new object

// // mutable object

// let myMarks=[90,45,67,54,57]
// console.log("orginalmarks:",myMarks)
// myMarks.push(45);
// console.log("after push:",myMarks)
// myMarks[2]=100
// console.log("after changing marks:",myMarks)

// // immutable object eg
// let animals=["cat","dogs","mouse"]
// console.log("orginal animals:",animals)
// let addedanimals=[...animals,"rat"]
// console.log("org:",animals)
// console.log("new:",addedanimals)


// let place={
//     palcename0:"ktm",
//     Country:"nepal",
// }
// let updatingplace={
//     ...place,
//     rank:1,
// }
// console.log("orginal place:",place)
// console.log("updated place:",updatingplace)