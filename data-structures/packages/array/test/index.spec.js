import assert from 'assert'
import { CustomArray } from '../../array/index.js'

describe('Custom Array implementation', () => {

    it('It should import the Custom array module', () => {
        assert.ok(CustomArray, true)
    })

    it('It should initialize an Object of the type Custom array', () => {
        const expectedObject = { length: 0, data: {} }
        const expectedInstanceName = 'CustomArray'

        const newCustomArray = new CustomArray()
        assert.equal(expectedInstanceName, newCustomArray.constructor.name)
        assert.deepEqual(newCustomArray, expectedObject)
    })

    it('It should push new items to the array', () => {
        const customArray = new CustomArray()
        customArray.push(1)
        customArray.push(2)
        customArray.push(3)
        assert.equal(customArray.length, 3)
    })

    it('It should retrieve an item by the index provided', () => {
        const customArray = new CustomArray()
        customArray.push(1)
        customArray.push(2)
        customArray.push(3)
        assert.equal(customArray.get(0), 1)
        assert.equal(customArray.get(1), 2)
        assert.equal(customArray.get(2), 3)
    })

    it('It should shift one position the indexes from the list', () => {
        const customArray = new CustomArray()
        customArray.push(1)
        customArray.push(2)
        customArray.push(3)

        customArray.shiftIndex(0)

        assert.equal(customArray.get(0), 2)
        assert.equal(customArray.get(1), 3)
    })

    it('It should Remove the last element in the list', () => {
        const customArray = new CustomArray()
        customArray.push(1)
        customArray.push(2)
        customArray.push(3)

        customArray.pop()

        assert.equal(customArray.get(3), undefined)
        assert.equal(customArray.length, 2)
    })

    it('It should Remove an item from an specific position in the list', () => {
        const customArray = new CustomArray()
        customArray.push(1)
        customArray.push(2)
        customArray.push(3)

        customArray.delete(1)

        assert.equal(customArray.get(1), 3)
        assert.equal(customArray.get(2), undefined)
        assert.equal(customArray.length, 2)
    })

    it('It should Add an element to the beginning of the list', () => {
        const customArray = new CustomArray()
        customArray.push(1)
        customArray.push(2)
        customArray.push(3)

        customArray.unshift(0)

        assert.equal(customArray.get(0), 0)
        assert.equal(customArray.length, 4)
    })

    it('It  Delete the first element from the beginning of the list', () => {
        const customArray = new CustomArray()
        customArray.push(1)
        customArray.push(2)
        customArray.push(3)

        customArray.shift()

        assert.equal(customArray.get(0), 2)
        assert.equal(customArray.length, 2)
    })
})