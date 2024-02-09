function quickSort(arr, k, order = "asc", deep = 0) {
  getLeftPivotIndex = () => {
    return Math.max(leftPivotIndex, start);
  };
  getRightPivotIndex = () => {
    return Math.min(rightPivotIndex, end);
  };

  const start = 0;
  const end = arr.length - 1;
  const pivotIndex = Math.floor((end - start) / 2) + start;
  let leftIndex = Math.max(pivotIndex - 1, start);
  let rightIndex = Math.min(pivotIndex + 1, end);
  let leftPivotIndex = pivotIndex;
  let rightPivotIndex = pivotIndex + 1;

  while (leftIndex >= 0 || rightIndex <= end) {
    if (leftIndex >= 0) {
      if (arr[leftIndex][k] === arr[getRightPivotIndex() - 1][k]) {
        arr.splice(--leftPivotIndex, 0, ...arr.splice(leftIndex--, 1));

        continue;
      }

      if (order === "desc") {
        if (arr[leftIndex][k] > arr[getRightPivotIndex() - 1][k]) {
          leftIndex--;

          continue;
        }
      } else {
        if (arr[leftIndex][k] < arr[getRightPivotIndex() - 1][k]) {
          leftIndex--;

          continue;
        }
      }
    }

    if (rightIndex <= end) {
      if (arr[rightIndex][k] === arr[getLeftPivotIndex()][k]) {
        arr.splice(rightPivotIndex++, 0, ...arr.splice(rightIndex++, 1));

        continue;
      }

      if (order === "desc") {
        if (arr[rightIndex][k] < arr[getLeftPivotIndex()][k]) {
          rightIndex++;

          continue;
        }
      } else {
        if (arr[rightIndex][k] > arr[getLeftPivotIndex()][k]) {
          rightIndex++;

          continue;
        }
      }
    }

    // swap
    if (leftIndex >= 0 && rightIndex <= end) {
      [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
      leftIndex--;
      rightIndex++;

      continue;
    }

    if (leftIndex >= 0) {
      arr.splice(--rightPivotIndex, 0, ...arr.splice(leftIndex--, 1));
      leftPivotIndex--;

      continue;
    }

    if (rightIndex <= end) {
      arr.splice(leftPivotIndex++, 0, ...arr.splice(rightIndex++, 1));
      rightPivotIndex++;

      continue;
    }
  }

  if (leftPivotIndex > 1) arr.splice(0, 0, ...quickSort(arr.splice(0, leftPivotIndex), k, order, deep + 1));

  if (rightPivotIndex < end - 1) arr.splice(rightPivotIndex, 0, ...quickSort(arr.splice(rightPivotIndex), k, order, deep + 1));

  return arr;
}
