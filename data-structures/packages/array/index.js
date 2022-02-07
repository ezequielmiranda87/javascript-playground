
/** Class representing a custom class for Arrays */
export default class CustomArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    /** Get an item giving an index */
    get(index) {
        return this.data[index]
    }

    /** Add an item to the end of the list */
    push(item) {
        this.data[this.length] = item
        this.length++
        return this.data
    }

    /** Shift list indexes */
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }

    }

    /** Remove the last element in the list */
    pop() {
        if (this.length > 0) {
            const lastItem = this.data[this.length - 1]
            delete this.data[this.length - 1]
            this.length--
            return lastItem
        }
        return undefined

    }


    /** Remove an item from an specific position in the list  */
    delete(index) {
        const item = this.data[index]

        if (this.length - 1 === index) {
            return this.pop()
        }

        this.shiftIndex(index)

        delete this.data[this.length - 1]

        this.length--
        return item
    }

    /** Add an element to the beginning of the list */
    unshift(item) {

        let newDataObj = {}
        newDataObj[0] = item

        for (let i = 0; i < this.length - 1; i++) {
            newDataObj[i + 1] = this.data[i]
        }
        this.data = newDataObj

        this.length++

    }

    /** Delete the first element from the beginning of the list*/
    shift() {
        const firstElement = this.data[0]

        delete this.data[0]

        this.shiftIndex(0)

        this.length--

        return firstElement

    }


}
