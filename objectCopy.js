// lodash

//  Problem 
// let object1 = {
//     name : "Pradeep"
// }
// let object2 = object1;
// object2.name = "dev"

// console.log("object1 >>>",object1)
// console.log("object2 >>>",object2)

/**
 * Solution 
 * 1. Deep Copy 
 * 2. Shallow Copy
*/

/**
 * Shallow Copy 
 * its working good only for one leavel 
*/
// Method 1 
// let object1 = {
//     name : "Pradeep"
// }
// let object2 = Object.assign(object1);
// object2.name = "dev"

// console.log("object1 >>>",object1)
// console.log("object2 >>>",object2)

// Method 2 
// let object1 = {
//     name : "Pradeep"
// }
// let object2 = {...object1};
// object2.name = "dev"

// console.log("object1 >>>",object1)
// console.log("object2 >>>",object2)


/**
 * Deep Copy 
 * its working good for all level of  Object but not working when my object keep "date" value of   Some function  
*/
//  Method 1 

// let object1 = {
//     name : "Pradeep",
//     details:{
//         email: 'pk@gmail.com'
//     }
// }
// let object2 = JSON.parse(JSON.stringify(object1));
// object2.name = "dev"
// object2.details.email = "dev@gmail.com"

// console.log("object1 >>>",object1)
// console.log("object2 >>>",object2)


//  Method 2 

var _ = require('lodash');

let object1 = {
    name : "Pradeep",
    details:{
        email: 'pk@gmail.com'
    },
    demoFun : function(){
        return 34; 
    }
}
let object2 = _.cloneDeep(object1);
object2.name = "dev"
object2.details.email = "dev@gmail.com"

console.log("object1 >>>",object1)
console.log("object2 >>>",object2)






 



