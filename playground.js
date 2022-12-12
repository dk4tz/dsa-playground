const top = 100;
const r1 = Array.from({ length: top }, () => Math.floor(Math.random() * top));
// const r2 = Array.from({length: top / 2}, () => Math.floor(Math.random() * top));

console.log(`random array 1:\n ${r1} \n`);
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
  console.log("insertion sort");
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

console.log(`random array merge sorted :\n ${mergeSort(r1)} \n`);

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

console.log(`random array quick sorted:\n ${quickSort(r1)} \n`);

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
    if (idx < 0 || idx >= this.length) return null
    var pointer = 0;
    var currentNode = this.head;

    while (pointer !== idx) {
      currentNode = currentNode.next;
      pointer++;
    }
    return currentNode;
  }
}

var list = new SinglyLinkedList();

list.push("gm");
list.push("ge");
list.push("gn");
console.log(list);

console.log(list.get(3));
