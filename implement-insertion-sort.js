// FreeCodeCamp | Implement Insertion Sort
// Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

function insertionSort(array) {
    if (array.length > 1) {
        for (let i = 1; i < array.length; i++) {
            for (let j = 0; j < i; j++) {
                if (array[i] < array[j]) {
                    let temp = array[i]
                    for (let k = i; k > j; k--) {
                        let innerTemp = array[k]
                        array[k] = array[k - 1]
                        array[k - 1] = innerTemp
                    }
                    array[j] = temp
                }
            }
        }
        return array
    } else {
        return array
    }
}