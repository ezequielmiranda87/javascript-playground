/* Destructuring Assignment
** Is a special syntax for assigning values taken directly from and object to variables
**
*/

/* ES5 code assignament
*/

var voxel = {x: 3.6, y:7.4, z:6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z
console.log(x,y,x)

/* ES6 destructiring assignment
** Here's the same assignment statement with ES6  destructuring syntax
*/

var voxel2 = {q: 3.6, w:7.4, e:6.54};

const {q, w, e} = voxel2;

console.log(q,w,e)