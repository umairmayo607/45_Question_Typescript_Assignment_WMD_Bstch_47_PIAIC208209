// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function allCars(
  manufacture: string,
  model: string,
  ...properties: [string, any][]
) {
  const car: any = {
    manufacture,
    model,
  };
  //Declare for properties parameter :
  for (const [first, second] of properties) {
    car[first] = second;
  }
  return car;
}

console.log("List of Cars:");

const myCar = allCars(
  "Suzuki",
  "WagonR",
  ["color", "Grey"],
  ["speed", "180kmphr"]
);
console.log(myCar);
const friendCar = allCars(
  "Suzuki",
  "Cultus",
  ["color", "Black"],
  ["speed", "200kmphr"]
);
console.log(friendCar);
const friendOfCar = allCars(
  "Honda",
  "Civic",
  ["color", "white"],
  ["speed", "220kmphr"]
);
console.log(friendOfCar);
