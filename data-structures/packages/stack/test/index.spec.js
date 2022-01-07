import assert from 'assert'
import Stack from '../index.js'

describe('Stack', () => {

    const myStack = new Stack()
    const firstValue = 1;
    const secondValue = 2;
    const thirdValue = 3;

    it('The stack size should be 0', () => {
        assert.equal(myStack.size(), 0)
    });

    it('The stack size should be 1', () => {
        myStack.push(firstValue)
        assert.equal(myStack.size(), 1)
    });

    it('The stack size should be 2 and the peek item should be the second value', () => {
        myStack.push(secondValue)
        assert.equal(myStack.peek(), secondValue)
        assert.equal(myStack.size(), 2)
    });

    it('The stack size should be 1 and the popped element should match with the second value pushed ', () => {
        const poppedElement = myStack.pop()
        assert.equal(myStack.size(), 1)
        assert.equal(secondValue, poppedElement)
    });

    it('The stack size should be 0 and the popped element should match with the first value pushed ', () => {
        const poppedElement = myStack.pop()
        assert.equal(myStack.size(), 0)
        assert.equal(firstValue, poppedElement)
    });

    it('The pop function should throw an error sin the stack does not contain elements in the array', () => {
        const popElement = () => myStack.pop()
        const errorType = 'StackIsEmptyError'
        assert.throws(popElement, errorType)
    });

    it('The stack size should be 3 and after clear it should be 0', () => {
        const size = 3
        const sizeCleared = 0

        myStack.push(firstValue)
        myStack.push(secondValue)
        myStack.push(thirdValue)

        assert.equal(myStack.size(), size)

        myStack.clear()
        assert.equal(myStack.size(), sizeCleared)
    });

});