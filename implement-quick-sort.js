function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivotVal = array[0]
    let leftArr = []
    let rightArr = []

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivotVal) {
            leftArr.push(array[i])
        } else {
            rightArr.push(array[i])
        }
    }

    return [...quickSort(leftArr), pivotVal, ...quickSort(rightArr)];

}