import radius,{ PI,x,y} from "./export.js";
import {calculateAreaofCircle,calculatePerimeterofCircle} from "./export.js";
console.log("Radius is:",radius);
console.log("PI is:",PI);
console.log("x is:",x);
console.log("y is:",y);

//if kei error aayo vane yo garne  
//package.json create garne 
//tesma {
//"type":"module"
//} yo file maa lakhne 

let area =calculateAreaofCircle(50);
let perimeter=calculatePerimeterofCircle(20)

     console.log("Area is:",area);  
        console.log("Perimeter is:",perimeter);

