import { SingleLinkedList } from "../packages/linkedList/index.js";

import { DoubleLinkedList } from "../packages/linkedList/index.js";


const singleLikedList = new SingleLinkedList(1)

singleLikedList.append(2)
singleLikedList.prepend(0)
singleLikedList.append(4)
singleLikedList.insert(3, 3)

console.log(singleLikedList)

console.log(`-------------------`)

const doubleLinkedList = new DoubleLinkedList(1)

doubleLinkedList.append(2)
doubleLinkedList.prepend(0)
doubleLinkedList.append(4)
doubleLinkedList.insert(3, 3)

console.log(doubleLinkedList)