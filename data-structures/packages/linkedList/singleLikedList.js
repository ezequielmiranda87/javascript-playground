// 1 --> 2 --> 3 --> 4 --> 5 --> null

class LinkedListNotIndexFound extends Error { }

export class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


/** Class representing a  Node for a Single linked list. */
export class SingleLinkedList {

    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    /** 
    * Add a node at the tail of the linked list
    * 
    */
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }


    /** 
     * Add a node at the beginning of the list
     * 
     */
    prepend(value) {
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    /** 
    * Add a new node in the a specific position in the Linked list
    * 
    */
    insert(index, value) {
        if (index >= this.length) {
            this.append(value)
            // or throw new error
            // throw new LinkedListNotIndexFound('Index not found in the Linked list')
        }
        const newNode = new Node(value)

        const firstPointer = this.getNodeByIndex(index - 1)
        const holdingPointer = firstPointer.next

        firstPointer.next = newNode
        newNode.next = holdingPointer

        this.length++

    }

    /** 
    * Get a the node by index provided
    * 
    */
    getNodeByIndex(index) {
        let counter = 0
        let currentNode = this.head

        if (currentNode.next == null || this.length === 0 || index > this.length) {
            return undefined
        }

        while (counter != index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    /** 
    * Remove a node from an specific position on the list
    * 
    */
    remove(index) {
        const previousPointer = this.getNodeByIndex(index - 1)
        const holdingPointer = this.getNodeByIndex(index + 1)

        previousPointer.next = holdingPointer

        this.length--
        this.tail = this.getNodeByIndex(this.length - 1)
    }
}