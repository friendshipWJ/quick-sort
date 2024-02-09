const $target = document.getElementById("target");

let list = [
  {
    k: "가",
    originalIndex: 0,
  },
  {
    k: "하",
    originalIndex: 1,
  },
  {
    k: "가",
    originalIndex: 2,
  },
  {
    k: "나",
    originalIndex: 3,
  },
  {
    k: "다",
    originalIndex: 4,
  },
  {
    k: "가",
    originalIndex: 5,
  },
  {
    k: "가",
    originalIndex: 6,
  },
  {
    k: "가",
    originalIndex: 7,
  },
  {
    k: "가",
    originalIndex: 8,
  },
  {
    k: "가",
    originalIndex: 9,
  },
  {
    k: "하",
    originalIndex: 10,
  },
  {
    k: "하",
    originalIndex: 11,
  },
  {
    k: "하",
    originalIndex: 12,
  },
  {
    k: "하",
    originalIndex: 13,
  },
  {
    k: "나",
    originalIndex: 14,
  },
  {
    k: "다",
    originalIndex: 15,
  },
  {
    k: "하",
    originalIndex: 16,
  },
  {
    k: "하",
    originalIndex: 17,
  },
  {
    k: "가",
    originalIndex: 0,
  },
  {
    k: "하",
    originalIndex: 1,
  },
  {
    k: "가",
    originalIndex: 2,
  },
  {
    k: "나",
    originalIndex: 3,
  },
  {
    k: "다",
    originalIndex: 4,
  },
  {
    k: "가",
    originalIndex: 5,
  },
  {
    k: "가",
    originalIndex: 6,
  },
  {
    k: "가",
    originalIndex: 7,
  },
  {
    k: "가",
    originalIndex: 8,
  },
  {
    k: "가",
    originalIndex: 9,
  },
  {
    k: "하",
    originalIndex: 10,
  },
  {
    k: "하",
    originalIndex: 11,
  },
  {
    k: "하",
    originalIndex: 12,
  },
  {
    k: "하",
    originalIndex: 13,
  },
  {
    k: "나",
    originalIndex: 14,
  },
  {
    k: "다",
    originalIndex: 15,
  },
  {
    k: "하",
    originalIndex: 16,
  },
  {
    k: "하",
    originalIndex: 17,
  },
];

console.log("original", JSON.parse(JSON.stringify(list)));

function quickSort(arr, k, order = "asc", deep = 0) {
  let $container = document.createElement("div");
  $container.classList.add("container");

  function display(data = arr) {
    $container.replaceChildren();
    data.forEach((me, index) => {
      const $temp = document.createElement("span");
      $temp.classList.add(`deep-${deep}`);
      if (index >= leftPivotIndex && index < rightPivotIndex) $temp.classList.add("pivot");
      if (index === leftIndex) $temp.classList.add("leftIndex");
      if (index === rightIndex) $temp.classList.add("rightIndex");
      $temp.innerText = me[k];
      $container.appendChild($temp);
    });

    $target.appendChild($container);
    debugger;
  }

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
    display();
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
  display();

  if (leftPivotIndex > 1) {
    var $temp = document.createElement("h3");
    $temp.innerText = "왼쪽";
    $target.appendChild($temp);
    arr.splice(0, 0, ...quickSort(arr.splice(0, leftPivotIndex), k, order, deep + 1));
  }

  if (rightPivotIndex < end - 1) {
    var $temp = document.createElement("h3");
    $temp.innerText = "오른쪽";
    $target.appendChild($temp);
    arr.splice(rightPivotIndex, 0, ...quickSort(arr.splice(rightPivotIndex), k, order, deep + 1));
  }

  return arr;
}

// console.log(quickSort(list, "k", "asc"));
console.log(quickSort(list, "k", "desc"));

var $temp = document.createElement("h3");
$temp.innerText = "결과";
$target.appendChild($temp);

const $container = document.createElement("div");
$container.classList.add("container");

list.forEach((me) => {
  const $temp = document.createElement("span");
  $temp.innerText = me.k;
  $temp.classList.add("deep-0");
  $container.appendChild($temp);
});

$target.appendChild($container);
