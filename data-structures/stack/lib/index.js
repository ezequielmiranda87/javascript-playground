
export default class Stack {
    constructor() {
        this.stack = []
    }

    push(item) {
        this.stack.push(item)
    }

    pop() {
        if (this.stack.length > 0) {
            return this.stack.pop()
        }
        return null
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    clear() {
        this.stack = []
    }

}

