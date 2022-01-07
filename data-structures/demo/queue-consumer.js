import Queue from '../../data-structures/packages/queue/index.js'

const myQueue = new Queue()

console.log(myQueue.isEmpty())

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.enqueue(5)

myQueue.dequeue()

console.log(myQueue.front())
