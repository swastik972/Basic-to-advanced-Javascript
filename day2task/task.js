// let obj1={
//     name:"Bibek",
//     show: function(){
//         console.log(this.name);
//     }
// }

// obj1.show();


// 2)See undefined

// let obj1={
//     name:"Bibek",
//     show: function(){
//         console.log(this.name);
//     }
// }

// let newfun=obj1.show();
// newfun();


// 3)bind()

// let obj1={
//     name:"Bibek",
//     show: function(){
//         console.log(this.name);
//     }
// }

// let newfun=obj1.show.bind(obj1);
// newfun();


// 4)Two obj with bind

// let obj1={
//     name:"Bibek",
//     show: function(){
//         console.log(this.name);
//     }
// }
// let obj2={
//     greet:"Hi",
//     greet1: function(){
//         console.log(this.greet);
//     }
// }

// let newfun1=obj1.show.bind(obj1);
// let newfun2=obj2.greet1.bind(obj2);

// newfun1();
// newfun2();


// // 6)Write function in strict mode and log this

// function show(){
//     let name="Bibek";
//     console.log(this);

// }
// show(); 


// 7)Convert normal function to arrow and see difference.

// const arrow=()=>{

//     console.log(this)
// }
// arrow();


// 8)Create object with nested object


// let obj1={
//     name:"Bibek",
//     obj2:{
//         course:"bsc.csit",
//         sem:"Third",
//           show:function(){
//         console.log(this.sem);
//     }
    
//     },
      
    
// }
// obj1.obj2.show();