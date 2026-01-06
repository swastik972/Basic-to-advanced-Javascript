// this always refers to the nearest object or instant

let obj1 = {
    price: 400,
    fruitName : "apple",
    weight: 2,
    unit : "kg",
    
    totalCost: function(){
        let totalPrice = this.price*this.weight;
        console.log("inside total cost function: ", totalPrice)
    }
    //,
    //  displayFruitName: function()=>{
       //this keyword will never exist in the arrow function
    //     console.log("Fruit Name: ", this.fruitName);
    //  }
}

//calling totalCost function
obj1.totalCost()

//assigning totalCost function a variable here when we call the function through variable, this will be lost.

let myNewFunction = obj1.totalCost
myNewFunction()

//using bind to preserve this keyboard
let myNewFunctionWithBind = obj1.totalCost.bind(obj1)
myNewFunctionWithBind()



