/**
 * @method binary_search
 * @returns The index position of the target if found, else returns null
 * @param {*} list
 * @param {*} target
 */
const binary_search = function(list, target) {
  let first = 0;
  let last = list.length - 1;

  while (first <= last) {
    let midPoint = Math.floor((first + last) / 2);

    if (list[midPoint] === target) {
      return midPoint;
    } else if (list[midPoint] < target) {
      first = midPoint + 1;
    } else {
      last = midPoint -1;
    }
  }
  return 0;
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12));
console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));