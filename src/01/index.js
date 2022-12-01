export const parseInput = input => {
  const elfsCalories = input
    .split('\n\n')
    .map(elf => elf.split('\n').map(Number));

  return elfsCalories;
};

export const partOne = input => {
  const data = parseInput(input);

  const sumOfCalories = data.map(elf =>
    elf.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
  );

  const maxCaloriesValue = Math.max(...sumOfCalories);

  return maxCaloriesValue;
};

export const partTwo = input => {
  const data = parseInput(input);

  const sumOfCalories = data.map(elf =>
    elf.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
  );
  const sortedSum = sumOfCalories.sort(function (a, b) {
    return b - a;
  });

  return sortedSum[0] + sortedSum[1] + sortedSum[2];
};
