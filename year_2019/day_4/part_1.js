// 122345

const areAdjacentValueEqual = (number) => {
  const array = (number + "").split("");

  return array.some((number, i) => {
    if (i === array.length - 1) return false;
    return number === array[i + 1];
  });
};

const isAscendingOrder = (number) => {
  const array = (number + "").split("");

  return array.every((number, i) => {
    if (i === array.length - 1) return true;
    return number <= array[i + 1];
  });
};

// console.log(isAscendingOrder(1233));

const getValidPassword = (range1, range2) => {
  let count = 0;
  for (let index = range1; index < range2; index++) {
    if (areAdjacentValueEqual(index) && isAscendingOrder(index)) {
      count++;
    }
  }

  return count;
};

console.log(getValidPassword(137683, 596253));
