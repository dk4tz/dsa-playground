const top = 100;
const r1 = Array.from({ length: top }, () => Math.floor(Math.random() * top));
// const r2 = Array.from({length: top / 2}, () => Math.floor(Math.random() * top));

// console.log(`random array 1:\n ${r1} \n`);
// console.log(`random array 2:\n ${r2} \n`)

//////////////////////////////////

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

// console.log(selectionSort([34, 32, 5, 19, -2, 8]))

//////////////////////////////////

const insertionSort = (arr) => {
  console.log('insertion sort');
  for (let i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

// console.log(insertionSort(randomArray))

//////////////////////////////////

s1 = [...Array(10).keys()];
s2 = [...Array(10).keys()];
// console.log(`sorted arrays:\n ${s1} \n\n ${s2}\n`)

const merge = (arr1, arr2) => {
  let result = [];
  while ((arr1[0] || arr1[0] === 0) && (arr2[0] || arr2[0] === 0)) {
    // *OR* cases handle for 0 as a value in the array
    // console.log('while hello');
    arr1[0] < arr2[0] ? result.push(arr1[0]) : result.push(arr2[0]);
    arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
  }
  result = arr2.length ? result.concat(arr2) : result.concat(arr1);
  return result;
};

// console.log(`sorted arrays merged:\n ${merge(s1, s2)} \n`);

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let sLeft = mergeSort(arr.slice(0, mid));
  let sRight = mergeSort(arr.slice(mid));

  return merge(sLeft, sRight);
};

// console.log(`random array merge sorted :\n ${mergeSort(r1)} \n`);

//////////////////////////////////

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};

// console.log(`random array quick sorted:\n ${quickSort(r1)} \n`);

//////////////////////////////////
// let numby = 123456789;
// let posi = 2;

const getDigit = (num, position) => {
  // let spread = Array.from(String(num), Number);
  // return spread[spread.length - position - 1]
  return Math.floor((Math.abs(num) / Math.pow(10, position)) % 10);
};

const digitCount = (num) => {
  if (Math.floor(num / 10) === 0) return 1;
  return 1 + digitCount(num / 10);
};

const mostDigits = (numArray) => {
  let most = 0;
  for (let i = 0; i < numArray.length; i++) {
    most = Math.max(most, digitCount(numArray[i]));
  }
  return most;
};

// console.log(getDigit(numby, posi))
// console.log(digitCount(numby))
// console.log(mostDigits([1, 2, 4, 555, 6, 77777, 99]));

const radixSort = (numArray) => {
  let most = mostDigits(numArray);
  for (let i = 0; i < most; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < numArray.length; j++) {
      let digit = getDigit(numArray[j], i);
      digitBuckets[digit].push(numArray[j]);
    }
    // console.log(digitBuckets)
    numArray = [].concat(...digitBuckets);
    // console.log(numArray)
  }
  return numArray;
};

// console.log(radixSort(r1));

//////////////////////////////////

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node; // set .next of current tail to the new node
      this.tail = node; // set new tail to the new node
    }
    this.length++;
    return this;
  }

  traverse() {
    let pointer = this.head;
    while (pointer) {
      console.log(pointer.val);
      pointer = pointer.next;
    }
  }

  pop() {
    if (!this.head) return undefined;

    var scout = this.head;
    var newTail = this.head;

    while (scout.next) {
      newTail = scout;
      scout = scout.next;
    }

    this.tail = newTail; // crown the new tail
    this.tail.next = null; // sever connection to popped tail
    this.length--; // decrement length

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return scout.val; // return val of popped node
  }

  shift() {
    if (!this.head) return undefined;

    var oldHead = this.head; // point to old head
    this.head = oldHead.next; // decapitate
    this.length--; // update height

    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead; // return old head
  }

  unshift(val) {
    var node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    var pointer = 0;
    var currentNode = this.head;

    while (pointer !== idx) {
      currentNode = currentNode.next;
      pointer++;
    }
    return currentNode;
  }

  set(idx, val) {
    var setNode = this.get(idx);
    if (!setNode) return false;
    setNode.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val); // !! coerces javascript object into a boolean
    if (idx === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var previousNode = this.get(idx - 1);
    var previousNext = previousNode.next;

    previousNode.next = newNode;
    newNode.next = previousNext;
    this.length++;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    var previousNode = this.get(idx - 1);
    var removedNode = previousNode.next;
    previousNode.next = removedNode.next;

    this.length--;

    return removedNode;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  reverse() {
    if (!this.head) return this; // handle empty

    var currentNode = this.head; // initialize "current" pointer on old head
    this.head = this.tail; // swap head and tail
    this.tail = currentNode;

    var nextNode; // initialize next and previous temp vars
    var prevNode = null; // tail's next should be 'null'

    for (let i = 0; i < this.length; i++) {
      // loop through list
      nextNode = currentNode.next; // move the "next" pointer up one (starting from tail)
      currentNode.next = prevNode; // set the "current" pointer's next to the "previous" pointer

      prevNode = currentNode; // move the "previous" pointer to the "current" node
      currentNode = nextNode; // move the "current" poitner to the "next" node
    }
    return this;
  }
}

// console.log("Singly Linked Listing...");

// var list = new SinglyLinkedList();
// list.push(":)");
// list.push("lol");
// list.push(":(");
// list.push("le sad");
// list.push(":/");
// list.push("ok this is the end");
// console.log(list);

// console.log(list.get(2));
// console.log(list.insert(2, "new 2"));
// console.log(list.get(2));
// console.log(list.remove(2));
// list.print();
// list.reverse();
// list.print();

class dNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new dNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newHead = new dNode(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx <= this.length / 2) {
      // front-ways
      let scout = this.head;
      for (let i = 0; i <= this.length; i++) {
        if (i === idx) {
          return scout;
        }
        scout = scout.next;
      }
    } else {
      // back-ways
      let scout = this.tail;
      for (let i = this.length - 1; i >= 0; i--) {
        if (i === idx) {
          return scout;
        }
        scout = scout.prev;
      }
    }
  }

  set(idx, val) {
    var selectedNode = this.get(idx);
    if (selectedNode) {
      selectedNode.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    var after = this.get(idx);
    var current = new dNode(val);
    var before = after.prev;

    current.next = after;
    current.prev = before;

    after.prev = current;
    before.next = current;

    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length) return this.pop();

    var current = this.get(idx);
    var before = current.prev;
    var after = current.next;

    after.prev = before;
    before.next = after;

    current.prev = null;
    current.next = null;

    this.length--;
    return true;
  }
}

// console.log('Doubly Linked Listing...');

// var dList = new DoublyLinkedList();
// dList.push('Goku');
// dList.push('Vegeta');
// dList.push('Freeza');
// dList.push('Master Roshi')
// dList.push('Piccolo')
// dList.push('Boo')
// console.log('!!!!!! THE OG !!!!!')
// console.log(dList);
// console.log(dList.get(1));
// console.log('##### THE NEWCOMER #####')
// console.log(dList.remove(1));
// console.log(dList);
// console.log(dList.get(1));

//////////////////////////////////

// STACK
class sNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new sNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    var popped = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return popped.val;
  }
}

// console.log('Stacking...');
// var stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// QUEUE
class qNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new qNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    var removed = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removed.val;
  }
}

// console.log('Queueing...')
// var q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q);

// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q)

//////////////////////////////////

class bstNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new bstNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    var scout = this.root;
    while (true) {
      if (val === scout.val) return undefined;
      if (val < scout.val) {
        if (scout.left === null) {
          scout.left = newNode;
          return this;
        } else {
          scout = scout.left;
        }
      } else if (val > scout.val) {
        if (scout.right === null) {
          scout.right = newNode;
          return this;
        } else {
          scout = scout.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    var scout = this.root;
    while (true) {
      if (val === scout.val) return true;
      if (val < scout.val) {
        scout = scout.left;
      } else {
        scout = scout.right;
      }
      if (scout === null) return false;
    }
  }
}

console.log('BSTing...');
var tree = new BST();
tree.insert(10);
tree.insert(100);
tree.insert(101);
tree.insert(97);
tree.insert(5);
tree.insert(7);
tree.insert(1);
// console.log(tree);
// console.log(tree.root.right);
// console.log(tree.root.left);
console.log(tree.find(10))
console.log(tree.find(5))
console.log(tree.find(10000))