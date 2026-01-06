//inheritance :the ability of an object to inherit properties and method from another object
//parent class 
class Vehicle{
    constructor(name,model,year)
    {
        this.name=name;
        this.model=model;
        this.year=year;
        console.log("Vehicle constructor is called" );
}
makeSound(sound){
    console.log(`Sound of vehicle is :${this.name}make ${sound}`);
}

displayNoWheels(){
    console.log(`${this.name} has 4 wheels`);
}
}
//child class 
class Car extends Vehicle{
  constructor(name,model,year,color){
    //calling parent class constructor
    super(name,model,year);
    //nem property for car  class
    this.color=color;
    console.log("Car constructor is called"); 
  }
}
let myCar=new Car("Car 1","Model 3",2022,"Red");
console.log(myCar.name);
console.log(myCar.color);
myCar.makeSound("vromm vroom");
myCar.displayNoWheels();


class Bike extends Vehicle
{
    constructor(name,model,year,color) {
        //calling parent class constructor 
        super(name,model,year);
        //new property for bike class 

       this.color=color;
        console.log("Constructor is called");
    }
  //method overriding: defining same method in child class
    noOfWheels() {
        console.log(`${this.name} has 2 wheels`)
    }
}


let myBike = new Bike("Bike1", "model100", 2020, "Black");
console.log(myBike.name)
console.log(myBike.model)
console.log(myBike.year)
myBike.makeSound("broom broom")
