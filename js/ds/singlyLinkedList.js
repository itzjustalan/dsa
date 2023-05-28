class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

export default class SinglyLinkedList {
    constructor(){
        this.reset()
    }
    reset() {
        this.head = this.tail = null
        this.length = 0
    }

    // The push method takes a value as parameter
    // and assigns it as the tail of the list
    push(value) {
        let _n = new Node(value)
        if(!this.head) {
            this.head = this.tail = _n
        } else {
            this.tail.next = _n
            this.tail = _n
        }
        this.length++
        return this.tail.value
    }

    // The pop method removes the tail of the list
    pop() {
        if(!this.tail) return null
        this.length--
        if(this.length === 0) {
            let _t = this.tail
            this.head = this.tail = null
            return _t.value
        }
        let _c = this.head
        let nt = _c
        while (_c.next) {
            nt = _c
            _c = _c.next
        }
        this.tail = nt
        this.tail.next = null
        return _c.value
    }

    // The shift method removes the head of the list
    shift() {
        if(!this.head) return null
        this.length--
        if(this.length === 0) {
            let _t = this.head
            this.head = this.tail = null
            return _t.value
        }
        let _t = this.head
        this.head = this.head.next
        return _t.value
    }

    // The unshift method takes a value as parameter
    // and assigns it as the head of the list
    unshift(value) {
        let _n = new Node(value)
        this.length++
        if(!this.head) {
            this.head = this.tail = _n
            return this.head
        }
        _n.next = this.head
        this.head = _n
        return this.head.value
    }


    // The get method takes an index number as parameter
    // and returns the value of the node at that index
    get(index) {
        if(index < 0 || index >= this.length) return null
        let _c = this.head
        console.log(index, _c.value, _c.next)
        while(index > 0) {
            index--
            console.log(index, _c.value, _c.next)
            _c = _c.next
        }
        return _c.value
    }


    // The set method takes an index number and a value as parameters
    // and modifies the node value at the given index in the list
    set(index, value) {
        if(index < 0 || index >= this.length) return null
        let _c = this.head
        while(index > 0) {
            index--
            _c = _c.next
        }
        _c.value = value
    }
        
    // The insert method takes an index number and a value as parameters
    // and inserts the value at the given index in the list
    insert(index, value) {
        return 'uninplemented'
    }

    // The remove method takes an index number as parameter
    // and removes the node at the given index in the list
    remove(index) {
        return 'uninplemented'
    }

    // The reverse method reverses the list and all pointers
    // so that the head becomes the tail and the tail becomes the head
    reverse() {
        return 'uninplemented'
    }

    pretty() {
        return JSON.parse(JSON.stringify(this))
    }

    description = `
Linked lists are a type of data structure that store values in the form of a list.
Within the list, each value is considered a node, and each node is connected with the
following value in the list (or null in case the element is the last in the list) through a pointer.

bigO:-

Insertion - O(1)
Removal - O(n)
Search - O(n)
Access - O(n)
    `
}
