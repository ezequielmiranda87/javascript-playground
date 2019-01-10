/* Rest operator with function parameters
** With this operator, you can create functions that take a variable number of arguments (indefinitives number of parameters)
** The rest operator elminates the need to check the args array
** and allows us to apply map(), filter(), and reduce()
*/

function howMany(...args){
    return `You have passed ${args.length} arguments`
}

console.log(howMany(1,2,3))
console.log(howMany(1,null, [1,2,3], {}))

const sum = (function() {
    "use strict";
    return function sum(...args) {
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3)); // 6