/* Spread operator
** Allows us to expand arrays and other expression in places where
** Multiple parameters or element are expected
*/

/* With ES5 we have to use apply() to call a function with indefined number parameters
** In the above example  we use apply  in the max function because it expect comma-separated arguments, but no array
*/ 

var arr = [6,34,67,25,24,8]
console.log(Math.max.apply(null, arr) )

/* Spread Operator use in function parameter
** ...arr2 returns an unpacked array. In other words it spreads the array
** Spread operator only work in-place, like in an argument to a function or in an array literal
*/

var arr2 = [6,34,67,25,24,8]
console.log(Math.max(...arr2))

/* Spread Operator use in  arrays literal
*/
{
    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;
    (function() {
    "use strict";
    arr2 = [...arr1]; // change this line
    })();
    console.log(arr2);
}

// This following code will not work
//const spreaded = ...arr; 