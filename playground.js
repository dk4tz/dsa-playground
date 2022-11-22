// Linked List
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(value) {
//         const newNode = new Node(value)
//         this.head = newNode
//         this.tail = this.head
//         this.length = 1
//     }
// }

// let myLinkedList = new LinkedList(4, 3)

// console.log(myLinkedList)

//////////////////////////////////

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++){
        let min = i;
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
    }
    return arr
}

// console.log(selectionSort([34, 32, 5, 19, -2, 8]))

//////////////////////////////////

const insertionSort = (arr) => {
    console.log('insertion sort')
    for (let i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
        console.log(arr);
    }
    return arr;
};

console.log(insertionSort([34, 32, 5, 19, -2, 8]))
