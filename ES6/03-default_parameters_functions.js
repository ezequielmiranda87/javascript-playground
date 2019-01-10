/* ES6 Default parameters functions
** ES6 introduces default parameters for functions
**
*/

function greeting(name = "Anonymous"){
    return "Hello " + name
}

console.log(greeting("ezex"))
console.log(greeting())