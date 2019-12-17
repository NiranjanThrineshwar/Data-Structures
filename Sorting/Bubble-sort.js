// Bubble sort takes an array as input and compares each element with the adjacent element and swaps if lesser to form a sorted array. 

// Method 1 - inefficient since even if array gets sorted before looping ends, it still loops till end of length. 
// Complexity - O(n^2)
function BubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

// Method 2 - more efficient since looping stops once all elements are swappped. 
// Complexity - O(n)
function BubbleSort(arr) {
  const len = arr.length;
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
      swapped = true;
    }
  } while (swapped);
  return arr;
};
