import assert from 'assert'

import { NodeDouble, DoubleLinkedList } from '../index.js'

describe('Double Linked List', () => {

    it('It should import the class Node', () => {
        assert.ok(NodeDouble, true)
    })

    it('It should import the class SingleLinkedList', () => {
        assert.ok(DoubleLinkedList, true)
    })

    it('It should create an object of type Node', () => {
        const newNode = new NodeDouble(1)
        const newNodeExpected = {
            value: 1,
            next: null,
            prev: null
        }

        assert.deepEqual(newNode, newNodeExpected)
    })

    it('It should append a new node in the tail of the linked list', () => {
        const nodeValue = 'x'

        const DLinkedList = new DoubleLinkedList(1)
        DLinkedList.append(nodeValue)

        assert.equal(DLinkedList.length, 2)
        assert.equal(DLinkedList.tail.prev.value, 1)
        assert.equal(DLinkedList.tail.next, null)
        assert.equal(DLinkedList.tail.value, nodeValue)
    })


    it('It should prepend a new node in the tail of the linked list', () => {
        const nodeValue = 'x'
        const lengthExpected = 4

        const DLinkedList = new DoubleLinkedList(1)
        DLinkedList.append(2)
        DLinkedList.append(3)
        DLinkedList.prepend(nodeValue)

        assert.equal(DLinkedList.head.value, nodeValue)
        assert.equal(DLinkedList.length, lengthExpected)

    })



    it('It should add  a new node in a specific position in the LinkedList', () => {
        const nodeIndex = 2
        const nodeValue = 'x'
        const lengthExpected = 4

        const DLinkedList = new DoubleLinkedList(1)
        DLinkedList.append(2)
        DLinkedList.append(3)
        DLinkedList.insert(nodeIndex, nodeValue)

        assert.equal(DLinkedList.getNodeByIndex(2).value, nodeValue)
        assert.equal(DLinkedList.length, lengthExpected)
        assert.equal(DLinkedList.getNodeByIndex(2).prev.value, 2)
        assert.equal(DLinkedList.getNodeByIndex(2).next.value, 3)

    })

    it('It should remove a node from an specific position in the LinkedList', () => {
        const nodeIndex = 1
        const lengthExpected = 2

        const DLinkedList = new DoubleLinkedList(1)
        DLinkedList.append(2)
        DLinkedList.append(3)
        DLinkedList.remove(nodeIndex)

        assert.equal(DLinkedList.getNodeByIndex(1).value, 3)
        assert.equal(DLinkedList.length, lengthExpected)

    })
})
