function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

// console.log(insertionSort([5, 10, 6, 43, 35, 44]));
console.log(insertionSort([2, 1, 9, 76, 4]));
