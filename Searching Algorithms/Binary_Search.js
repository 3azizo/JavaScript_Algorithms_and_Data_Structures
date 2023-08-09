function Binary(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middel = Math.floor((left + right) / 2);
  while (arr[middel] !== target) {
    console.log(left, middel, right);

    if (target < arr[middel]) right = middel - 1;
    else left = middel + 1;

    if (left == middel && right == middel) return -1;
    middel = Math.floor((left + right) / 2);
  }

  return middel;
}

// must de sorted  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Binary([1, 2, 4, 5, 7, 9, 10, 11, 15], 53));
