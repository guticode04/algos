function reverseLinkedList(list){
  if ( !list.head.next ) return list;
  let currentNode = list.head;
  let firstNode = currentNode;
  let nextNode = null;
  let prevNode = null;

  while( currentNOde !== null ) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  list.head = prevNode;
  list.tail = firstNode;
  return list;

}

//Give Singly Linked List

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }
}