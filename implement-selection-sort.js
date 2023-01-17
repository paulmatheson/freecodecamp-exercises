// Implement Selection Sort
// Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

function selectionSort(array) {
    // Return immediately if array is empty or has only 1 value
    if (array.length <= 1) {
        return array
    } else {
        // Check if Array is already sorted in ascending order
        let isSorted = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                isSorted = false
            }
        }
        // If the Array is not sorted, selection sort algorithm will run
        if (!isSorted) {
            for (let i = 0; i < array.length; i++) {
                let lowestVal = array[i]
                let indexOfLow = i
                for (let j = i + 1; j < array.length; j++) {
                    if (array[j] < lowestVal) {
                        lowestVal = array[j]
                        indexOfLow = j
                    }
                }
                let temp = array[i]
                array[i] = array[indexOfLow]
                array[indexOfLow] = temp
            }
        }
        return array
    }
}