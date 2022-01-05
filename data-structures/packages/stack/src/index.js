class StackIsEmptyError extends Error { }
export default class Stack {
    constructor() {
        this.stack = []
    }

    push(item) {
        this.stack.push(item)
    }

    size() {
        return this.stack.length
    }

    pop() {
        if (this.stack.length > 0) {
            return this.stack.pop()
        }
        throw new StackIsEmptyError('The stack does not contain elements to pop')
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    clear() {
        this.stack = []
    }

}

