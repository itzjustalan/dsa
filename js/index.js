import Queue from './ds/queue.js'
import Stack from './ds/stack.js'

const elements = ['apple', 'mango', 'grape']

const testStack = () => {
    const stack = new Stack()
    console.log('testing stack:', stack.pretty())

    console.log('adding elements to stack:', elements)
    elements.forEach(element => {
        console.log(stack.push(element), stack.pretty())
    });

    console.log('removing elements from stack using pop()')
    while (stack.size) {
        console.log(stack.pop(), stack.pretty())
    }
}

const testQueue = () => {
    const queue = new Queue()
    console.log('testing queue:', queue.pretty())

    console.log('adding elements to queue:', elements)
    elements.forEach(element => {
        console.log(queue.enque(element), queue.pretty())
    });

    console.log('removing elements from queue using dequeue()')
    while (!queue.isEmpty) {
        console.log(queue.dequeue(), queue.pretty())
    }
}

const main = async () => {
    console.log('main: 0ms');
    console.time('main')

    testStack()
    console.timeLog('main')
    testQueue()

    console.timeEnd('main')
}

main()