function binarySearch(sortedArray, value) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (value === sortedArray[mid]) {
      return mid;
    } else if (value < sortedArray[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
