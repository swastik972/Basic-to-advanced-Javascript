
// this always refers to the nearest object or instance

let obj1 = {
    price: 400,
    fruitName: "apple",
    weight: 2,
    unit: "kg",

    totalCost: function () {
        let totalPrice = this.price * this.weight;
        console.log("inside total cost function:", totalPrice);
    }
};

// calling totalCost function
obj1.totalCost();

// assigning totalCost function to a variable
// when called like this, `this` is lost
let myNewFunction = obj1.totalCost;
myNewFunction();

// using bind to preserve `this`
let myNewFunctionWithBind = obj1.totalCost.bind(obj1);
myNewFunctionWithBind();
