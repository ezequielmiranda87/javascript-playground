import assert from 'assert'

import { Node, SingleLinkedList } from '../index.js'

describe('Single Linked List', () => {

    it('It should import the class Node', () => {
        assert.ok(Node, true)
    })

    it('It should import the class SingleLinkedList', () => {
        assert.ok(SingleLinkedList, true)
    })

    it('It should create an object of type Node', () => {
        const newNode = new Node(1)
        const newNodeExpected = {
            value: 1,
            next: null
        }

        assert.deepEqual(newNode, newNodeExpected)
    })

    it('It should append a new node in the tail of the linked list', () => {
        const nodeValue = 2
        const newNode = new Node(nodeValue)

        const linkedList = new SingleLinkedList(1)

        linkedList.append(nodeValue)

        assert.equal(linkedList.length, 2)
        assert.deepEqual(newNode, linkedList.tail)
        assert.equal(nodeValue, linkedList.tail.value)

    })


    it('It should prepend a new node in the tail of the linked list', () => {
        const nodeValue = 2

        const linkedList = new SingleLinkedList(1)
        linkedList.prepend(nodeValue)

        assert.equal(nodeValue, linkedList.head.value)
        assert.equal(linkedList.length, 2)

    })

    it('It should search for a specific node by the index  provided', () => {
        const linkedList = new SingleLinkedList(1)
        const nodeIndex = 1
        const nodeValue = 2

        linkedList.append(nodeValue)
        linkedList.append(3)
        linkedList.append(4)

        assert.equal(linkedList.getNodeByIndex(nodeIndex).value, nodeValue)
    })

    it('It should return undefined when you  search for a specific node with an index that does not exist in the linkedList', () => {
        const linkedList = new SingleLinkedList(1)
        linkedList.append(3)

        assert.equal(linkedList.getNodeByIndex(4), undefined)
    })

    it('It should add  a new node in a specific position in the LinkedList', () => {
        const nodeValue = 'x'
        const nodeIndex = 2

        const linkedList = new SingleLinkedList(1)
        linkedList.append(2)
        linkedList.append(3)
        linkedList.append(4)

        linkedList.insert(nodeIndex, nodeValue)

        assert.equal(linkedList.getNodeByIndex(nodeIndex).value, nodeValue)
        assert.equal(linkedList.length, 5)
    })

    it('It should remove a node from an specific position in the LinkedList', () => {
        const nodeIndex = 2
        const nodeExpectedValue = 4

        const linkedList = new SingleLinkedList(1)
        linkedList.append(2)
        linkedList.append(3)
        linkedList.append(4)

        linkedList.remove(nodeIndex)

        assert.equal(linkedList.getNodeByIndex(nodeIndex).value, nodeExpectedValue)
        assert.equal(linkedList.length, 3)
    })
})
