// const numbers = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
// 0, 1, 2,  3, 4, 5, 6,  7, 8,  9,  10, 11
// 4330636
// 19690720
// 19690720

// (100 * num1) + num2

const numbers = [
  1, 60, 86, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 6, 1, 19, 2, 19, 13, 23,
  1, 23, 10, 27, 1, 13, 27, 31, 2, 31, 10, 35, 1, 35, 9, 39, 1, 39, 13, 43, 1,
  13, 43, 47, 1, 47, 13, 51, 1, 13, 51, 55, 1, 5, 55, 59, 2, 10, 59, 63, 1, 9,
  63, 67, 1, 6, 67, 71, 2, 71, 13, 75, 2, 75, 13, 79, 1, 79, 9, 83, 2, 83, 10,
  87, 1, 9, 87, 91, 1, 6, 91, 95, 1, 95, 10, 99, 1, 99, 13, 103, 1, 13, 103,
  107, 2, 13, 107, 111, 1, 111, 9, 115, 2, 115, 10, 119, 1, 119, 5, 123, 1, 123,
  2, 127, 1, 127, 5, 0, 99, 2, 14, 0, 0,
];

const add = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => num1 * num2;

const calculation = (code, index, operation) => {
  const value1 = code[code[index + 1]];
  const value2 = code[code[index + 2]];
  const resultLoc = code[index + 3];

  code[resultLoc] = operation(value1, value2);
  return index + 4;
};

const operationToPerform = (opcode, code, index) => {
  const instruction = {
    1: add,
    2: multiply,
  };

  return calculation(code, index, instruction[opcode]);
};

const sprint = (code) => {
  let index = 0;
  while (code[index] !== 99) {
    index = operationToPerform(code[index], code, index);
  }

  return code;
};

console.log(sprint(numbers));

// const code = Deno.readTextFileSync("./input.txt").split(",");
