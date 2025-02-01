const calculateFuel = (number) => {
  return Math.floor(number / 3) - 2;
};

const getFuel = (numbers) => {
  return numbers
    .map((number) => calculateFuel(number))
    .reduce((init, fuelValue) => {
      return fuelValue + init;
    }, 0);
};

const input = Deno.readTextFileSync("./input.txt").split("\n");

console.log(getFuel(input));
