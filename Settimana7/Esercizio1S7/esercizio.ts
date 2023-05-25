function getClosestNumber(num1: number, num2: number): number {
  const randomNum = Math.random() * 100;
  const diff1 = Math.abs(randomNum - num1);
  const diff2 = Math.abs(randomNum - num2);

  if (diff1 < diff2) {
    return num1;
  } else {
    return num2;
  }
}

const value1: number = 10;
const value2: number = 20;

const closestNumber: number = getClosestNumber(value1, value2);
console.log(
  `Il numero più vicino al numero casuale generato è: ${closestNumber}`
);
