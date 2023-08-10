// const swap = (arr, idx1, idx2) =>
//   ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

function bubbelSort(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let tamp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tamp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
    console.log("ONE PASS COMPLETE!");
  }
  return arr;
}

// console.log(bubbelSort([5, 3, 4, 1, 2]));
console.log(bubbelSort([8, 1, 2, 3, 4, 5, 6, 7]));
