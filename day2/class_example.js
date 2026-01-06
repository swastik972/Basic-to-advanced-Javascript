//class:blueprint of an object 
//objects: instance of a class 

class Car {
    //constructor runs when we create a new car 
    //It is initial setup of the object 
    #grade;
    constructor(color,name,model,makingyear){
        //defining property inside the class 
        this.color=color;
        this.name=name;
        this.model=model;
        this.year=makingyear;
        this.#grade="A";
        console.log("Car constructor  is called");
    }
    #stop(){
        console.log(`${this.#grade} is stopped`);
    }
    //defining method
    start(){
        console.log(`${this.name} is started`);
    }
    displayDetails(myName){
    console.log(`myName is :${myName}`);
    console.log(`Car color is :${this.color},`);
    console.log(`Car name is :${this.name},`);
    console.log(`Car model is :${this.model},`);
    console.log(`Car making year is :${this.year}.`);
    }
}
//creating instance or object of the class car 
let BMW=new Car("black","BMW","X5",2023);
let byd=new Car("red","BYD","X6",2024);
//accessing property of class using object
console.log("Car color is:",BMW.color);
console.log("car name is:",BMW.name);
console.log("car model is:",BMW.model);
console.log("car making year is:",BMW.year);
BMW.start();
BMW.displayDetails("Swastik");
//BMW.stop(); // This will cause an error because #stop is a private method
//accessing byd property of class using object 
console.log("Car color is:",byd.color);
console.log("car name is:",byd.name);
console.log("car model is:",byd.model);
console.log("car making year is:",byd.year);
byd.start("Rawat");
byd.displayDetails("Rawat");
//byd.stop(); // This will cause an error because #stop is a private method