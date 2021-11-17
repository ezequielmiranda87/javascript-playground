

class Stack {
    constructor() {
        this.stack = []
    }


    // Add 
    push(item) {
        this.stack.push(item)
    }

    // Removes the last element from an array and returns it.
    pop() {
        if (this.stack.length > 0) {
            return this.stack.pop()
        }
        return undefined
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    clear() {
        this.stack = []
    }

}

const myStack = new Stack();

myStack.push(1)
myStack.push(2)
myStack.push(3)
// myStack.pop()
console.log(myStack.peek())

console.log(myStack)