
class QueueIsEmptyError extends Error { }

export default class Queue {
    constructor() {
        this.collection = []
    }

    enqueue(item) {
        this.collection.push(item)
    }

    dequeue() {
        if (this.collection.length > 0) {
            return this.collection.shift()
        }
        throw new QueueIsEmptyError('The queue does not contain elements to pop')
    }

    front() {
        return this.collection[0]
    }

    size() {
        return this.collection.length
    }

    isEmpty() {
        return this.collection.length <= 0
    }

}