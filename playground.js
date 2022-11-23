const top = 200;
const r1 = Array.from({length: top}, () => Math.floor(Math.random() * top));
const r2 = Array.from({length: top / 2}, () => Math.floor(Math.random() * top));

console.log(`random arrays:\n ${r1} \n\n ${r2}\n`)

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
console.log(`sorted arrays:\n ${s1} \n\n ${s2}\n`)

const merge = (arr1, arr2) => {
    let result = [];
    while((arr1[0] || arr1[0] === 0) && (arr2[0] || arr2[0] === 0)) {
        // console.log('while hello');
        (arr1[0] < arr2[0]) ? result.push(arr1[0]) : result.push(arr2[0]);
        (arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift();
    }
    result = (arr2.length) ? result.concat(arr2) : result.concat(arr1);
    return result;
};

console.log(`sorted arrays merged:\n ${merge(s1, s2)} \n`);

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let sLeft = mergeSort(arr.slice(0, mid));
    let sRight = mergeSort(arr.slice(mid));

    return merge(sLeft, sRight); 
};

console.log(`randoms arrays merged, sorted :\n ${mergeSort(r1, r2)} \n`);