/**
 * @method recursive_binary_search
 * @returns The index position of the target if found, else returns null
 * @param {*} list
 * @param {*} target
 */
const recursive_binary_search = function(list, target) {
  if (list.length === 0) {
    return 0;
  } else {
    let midpoint = Math.floor(list.length / 2);
    if (list[midpoint] === target) {
      return midpoint;
    } else if (list[midpoint] < target) {
      return recursive_binary_search(list.slice(midpoint + 1, list.length - 1), target);
    } else {
      return recursive_binary_search(list.slice(0, midpoint + 1), target);
    }
  }
}

console.log(recursive_binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12));
console.log(recursive_binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));