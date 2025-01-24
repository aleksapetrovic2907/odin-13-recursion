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

function exponentialSearch(sortedArray, value) {
  let lowerBoundIndex = 0;

  for (let higherBoundIndex = 1; higherBoundIndex < sortedArray.length; ) {
    if (value === sortedArray[higherBoundIndex]) {
      return higherBoundIndex;
    } else if (value < sortedArray[higherBoundIndex]) {
      let boundedArray = sortedArray.slice(lowerBoundIndex, higherBoundIndex); // We add 1 since 2nd parameter is exclusive.
      return lowerBoundIndex + binarySearch(boundedArray, value); // We add lowerBoundIndex to account for the sliced values left of bound.
    }

    lowerBoundIndex = higherBoundIndex;
    higherBoundIndex = Math.min(higherBoundIndex * 2, sortedArray.length - 1);
  }

  let boundedArray = sortedArray.slice(lowerBoundIndex, sortedArray.length);
  return lowerBoundIndex + binarySearch(boundedArray, value);
}
