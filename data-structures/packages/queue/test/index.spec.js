import assert from 'assert'
import Queue from '../index.js'

describe('Queue', () => {

    const myQueue = new Queue();
    const firstValue = 1
    const secondValue = 2

    it('The stack size should be 0 and isEmpty should return true at initialize', () => {
        const expected = 0
        const isEmptyExpected = true
        assert.equal(myQueue.size(), expected)
        assert.equal(myQueue.isEmpty(), isEmptyExpected)

    });

    it('The stack size should be 1', () => {
        const expected = 1
        myQueue.enqueue(firstValue)
        assert.equal(myQueue.size(), expected)
    });

    it('The stack size should be 2 and the front element should be the first value', () => {
        const expectedSize = 2
        const expectedValue = 1
        myQueue.enqueue(secondValue)
        assert.equal(myQueue.size(), expectedSize)
        assert.equal(myQueue.front(), expectedValue)
    });

    it('The stack size should be 1 after dequeue and the front element should be the second value', () => {
        const expectedSize = 1
        const expectedValue = 2
        myQueue.dequeue()
        assert.equal(myQueue.size(), expectedSize)
        assert.equal(myQueue.front(), expectedValue)
    });

    it('The stack size should be 0 after dequeue and the size function should return true', () => {
        const expectedSize = 0
        const isEmptyExpected = true
        myQueue.dequeue()
        assert.equal(myQueue.size(), expectedSize)
        assert.equal(myQueue.isEmpty(), isEmptyExpected)
    });

    it('The dequeue function should throw a QueueIsEmptyError after try to dequeue the empty queue', function () {
        const errorType = 'QueueIsEmptyError'
        const callDequeue = () => myQueue.dequeue()
        assert.throws(callDequeue, errorType)

    })
})
