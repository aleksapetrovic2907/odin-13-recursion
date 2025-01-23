function mergeSort(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, mid);
  let rightHalf = array.slice(mid);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  if (left.length > 0) {
    result = result.concat(left);
  } else if (right.length > 0) {
    result = result.concat(right);
  }

  return result;
}

let myArray = [2, 4, 1, 9, 3, 8, 5, 6];
