const calculateFuel = (number) => {
  let fuelRequired = 0;
  let massValue = Math.floor(number / 3) - 2;

  while (massValue > 0) {
    fuelRequired += massValue;
    massValue = Math.floor(massValue / 3) - 2;
  }

  return fuelRequired;
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
