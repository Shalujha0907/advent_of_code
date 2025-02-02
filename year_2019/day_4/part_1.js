const areAdjacentValueEqual = (array) => {
  for (let index = 0; index < array.length; index++) {
    if (
      array[index] !== array[index - 1] &&
      array[index] === array[index + 1] &&
      array[index + 1] !== array[index + 2]
    ) {
      return true;
    }
  }
  return false;
};

// console.log(areAdjacentValueEqual([1, 1, 1, 2]));

const isAscendingOrder = (array) => {
  return array.every((number, i) => {
    if (i === array.length - 1) return true;
    return number <= array[i + 1];
  });
};

const getValidPassword = (range1, range2) => {
  let count = 0;
  for (let index = range1; index < range2; index++) {
    const array = (index + "").split("");
    if (areAdjacentValueEqual(array) && isAscendingOrder(array)) {
      count++;
    }
  }

  return count;
};

console.log(getValidPassword(137683, 596253));
