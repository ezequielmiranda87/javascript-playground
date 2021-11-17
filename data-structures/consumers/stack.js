import Stack from '../stack/lib/index.js'

// Create stack instance
const myStack = new Stack();


// Add element to the stack
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)

// Pop one element
myStack.pop()
myStack.pop()

// Peek the last one
console.log('Peek', myStack.peek())


// Print object instance
console.log(myStack)