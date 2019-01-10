
/* ES6 Arrow Function

** In JS, we often don't need to name our function, especially when passing **a function as an arguments to another function.
**
*/

var magic = function() {
  "use strict";
  return new Date();
};

/* ES6 Arrow Function
** ES6 provides us with the syntact sugar sugar to not have to write anonymous functions this way. You can use arrow function syntaxt
*/

var magic2 = () => {
  return new Date
}

/* When there is no function body, and only a return value, arrow function **syntax  allows you to omit the keyword return as well as the brackets 
**surrounding the code 
*/
var magic2 = () => new Date();


/* Passing attributes to arrow functions
*/
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));

/* HIGHER ORDER ARROW FUNCTION
** Arrow functions work really well with higher order function, such as map(), filter(), and reduce
** that take other functions as arguments for processing collections of data
*/

FBPosts = [
  {id:1,thumbnail : 'algo', shares : 1001, likes: 600 },
  {id:2,thumbnail : 'algo', shares : 102, likes: 700 },
  {id:3,thumbnail : 'algo', shares : 10, likes: 1 },
  {id:4,thumbnail : 'algo', shares : 10, likes: 1 },
]

//let myArrow = (post)=> post.thumbnail !== null && post.shares > 100 && post.like > 500

// Without arrow function
FBPosts.filter(function(post){
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})


// With arrow function
let result = FBPosts.filter((post)=> post.thumbnail !== null && post.shares > 100 && post.likes > 500)
console.log(result)


/* Exercice 
** Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not
** integers) in the array realNumberArray and store the new array in the variable squaredIntegers.
*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter(el => el % 2 == 0 && el > 0 ).map((el)=> el * el)
  // change code above this line
  return squaredIntegers;
};

// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);