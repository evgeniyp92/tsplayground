import { SortableCollection } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public value: number) {}
}

export class LinkedList implements SortableCollection {
  head: Node | null = null;

  // add a new node to the list
  public add(data: number): void {
    const node = new Node(data);
    // if there is no head (the element is the first in the list), set head to
    // be the node
    if (!this.head) {
      this.head = node;
      return;
    }
    // get a ref to first node in chain
    let tail = this.head;
    // while tail has a ref to next, move the pointer to next, and repeat until
    // there is no next
    while (tail.next) {
      tail = tail.next;
    }

    // assign the node we just created to the tail of the list
    tail.next = node;
  }

  public get length(): number {
    // check if the list actually has any entries
    if (!this.head) {
      // list is empty, return 0
      return 0;
    }

    // count the length with a while loop
    let length = 1;
    // set the marker to the top of the list
    let node = this.head;
    // while the node has a next prop
    while (node.next) {
      // add 1 to the length
      length++;
      // set the node to the next node
      node = node.next;
    }
    return length;
  }

  private at(index: number): Node {
    // if there's no head the list is empty
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    // setting up the counter
    let counter = 0;
    // overriding type inference and saying that node can be set to either a
    // Node or null
    let node: Node | null = this.head;
    // while we have a node
    while (node) {
      // if we've found the right node return it
      if (counter === index) return node;
      // otherwise iterate the counter and set node to refer to next node
      counter++;
      node = node.next;
    }

    // if we have iterated through all the nodes and havent found our desired
    // node throw an error
    throw new Error('Index out of bounds');
  }

  public compare(leftIndex: number, rightIndex: number): boolean {
    // if there's no head the list is empty
    if (!this.head) {
      throw new Error('List is empty');
    }
    // get the values at the indices and compare them
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  public swap(leftIndex: number, rightIndex: number): void {
    // get the values at indices
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    // swap logic
    const leftHand = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = leftHand;
  }

  public print(): void {
    // if there's no entries just return
    if (!this.head) return;
    // set node to be the head
    let node: Node | null = this.head;
    // while theres a node
    while (node) {
      // log the value and set node to be the next node
      console.log(node.value);
      node = node.next;
    }
  }
}
