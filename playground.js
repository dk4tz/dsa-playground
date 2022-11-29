const top = 100;
const r1 = Array.from({length: top}, () => Math.floor(Math.random() * top));
// const r2 = Array.from({length: top / 2}, () => Math.floor(Math.random() * top));

console.log(`random array 1:\n ${r1} \n`)
// console.log(`random array 2:\n ${r2} \n`)

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
    }
    return arr;
};

// console.log(insertionSort(randomArray))

//////////////////////////////////

s1 = [...Array(10).keys()]
s2 = [...Array(10).keys()]
// console.log(`sorted arrays:\n ${s1} \n\n ${s2}\n`)

const merge = (arr1, arr2) => {
    let result = [];
    while((arr1[0] || arr1[0] === 0) && (arr2[0] || arr2[0] === 0)) { // *OR* cases handle for 0 as a value in the array
        // console.log('while hello');
        (arr1[0] < arr2[0]) ? result.push(arr1[0]) : result.push(arr2[0]);
        (arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift();
    }
    result = (arr2.length) ? result.concat(arr2) : result.concat(arr1);
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
}

const pivot = (arr, start=0, end=arr.length-1) => {
    let pivot = arr[start];
    let swapIdx = start;
    
    for (let i=start+1; i<arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    };

    swap(arr, start, swapIdx)
    return swapIdx;
}

const quickSort = (arr, left=0, right=arr.length-1) => {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIdx - 1);
        // right
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

console.log(`random array quick sorted:\n ${quickSort(r1)} \n`);

//////////////////////////////////
let numby = 123456789;
let posi = 2;
const getDigit = (num, position) => {
    // let spread = Array.from(String(num), Number);
    // return spread[spread.length - position - 1]
    return Math.floor(Math.abs(num) / Math.pow(10, position) % 10)
};

const digitCount = (num) => {
    if (Math.floor(num / 10) === 0) return 1
    return 1 + digitCount(num / 10)
}

const mostDigits = (numArray) => {
    let most = 0;
    for (let i = 0; i < numArray.length; i++){
        most = Math.max(most, digitCount(numArray[i]))
    }
    return most;
}

// console.log(getDigit(numby, posi))
// console.log(digitCount(numby))
console.log(mostDigits([1, 2, 4, 555, 6, 77777, 99]));