interface IStack<T> {
    push(item: T): void;
}

// What is the <T> ?
class Stack<T> implements IStack<T> {

    private storage: T[] = [];
    private _storage = [];

    private _capacity = Infinity;

    constructor(capacity) {
        this._storage = [];
        this._capacity = capacity;
    }

    push(item) {
        if (this.size() === this._capacity) {
            throw Error('Stack has reached max capacity')
        }
        this._storage.push(item);
    }

    // Removes the last element from an array and returns it.
    pop() {
        this._storage.pop()
    }

    peek() {

    }

    size() {
        return this._storage.length;
    }

}

const myStack = new Stack(10)
myStack.push(1)

console.log(myStack.size())