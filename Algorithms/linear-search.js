/**
 * @method liner_search
 * @returns The index position of the target if found, else returns null
 * @param {*} list
 * @param {*} target
 */
const liner_search = function (list, target) {
  let position = 0;
  list.forEach((element, index) => {
    if (element === target) {
      position = index;
    }
  });
  return position;
};

console.log(liner_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12));
console.log(liner_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
