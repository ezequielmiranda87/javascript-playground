/* Let 
** ES6 introduce the special keyword "let" to declare
** block scoope variables. Also, this variables help to prevent the 
** fail override of variables
*/

// Prevent variable override
    let camper = 'James';
    //let camper = 'David'; // throws an error   

//--------------------------------------------------------------------

// Let and block scoope
function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
      let i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }
checkScope()

//--------------------------------------------------------------------


/* Const
** const has all the features that let has, with the added bonus that variable
** declared using const are read-only
**  This means that once a variable is assigned with const, it cannot be reassigned
*/

'use strict'
const FAV_PET = "Cats"
// FAV_PET = "Dogs" // returns error


//--------------------------------------------------------------------

/* Mutate an Array declared with const
** The objects (including array and function) assigned to a variable using const are still mutable.
** Using the const declaration only prevents reassigment of the variable identifier
*/

"use strict";
const s = [5, 6, 7];
//s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]

//--------------------------------------------------------------------


/* ES6 Prevent mutation
** To ensure the object mutation, JavaScript provides a function Object.freeze() to prevent data mutation
** Once the object is frozen, you can no longer add, update, or delete properties from it.
** Any attempt at changing the object will be rejected without an error
*/

let myInmutableObject = {
    name: "Hi, i'm inmuable",
    review: "Awesome"
};

Object.freeze(myInmutableObject)
myInmutableObject.review = "New Value"; // Will be ignored, mutation not allowed
myInmutableObject.newProp = "Test"; //Will be ignored, mutation not allowed

console.log(myInmutableObject)


/* ES6 Prevent mutation Example
*/

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // change code below this line
  Object.freeze(MATH_CONSTANTS)
  
    // change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();