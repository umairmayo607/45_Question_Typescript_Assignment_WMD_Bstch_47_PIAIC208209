// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

function createCar(name: string, model: string, year: number) {
  return {
    name,
    model,
    year,
  };
}

// create an Array of Car:
const cars = [
  createCar("civic", "honda", 2019),
  createCar("city", "honda", 2020),
  createCar("mehran", "suzuki", 2000),
];

const errorIndex = 7;
console.log(`Cars at index ${errorIndex} `, cars[errorIndex]);

cars.forEach((car) => {
  console.log(`Name of Car: ${car.name}`);
  console.log(`Name of Model: ${car.model}`);
  console.log(`Year: ${car.year}`);
  console.log();
});
