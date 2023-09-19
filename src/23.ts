// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let name: string = "umair";
//false:
console.log("Is name == Ali? I think so this is false:");
console.log(name == "Ali");
//true
console.log("Is name === umair? I think so this is True:");
console.log(name == "umair");

let age = 30;
//fasle:
console.log("is age > 32? I think so this is false:");
console.log(age > 32);
//true
console.log("is age <31? I think so this is true:");
console.log(age < 31);

let car: string = "HondaCivic";
//false:
console.log("Is car == HondaCity? I think so this is false: ");
console.log(car == "HondaCity");

//True:
console.log("Is car == HondaCivic? I think so this is false: ");
console.log(car == "HondaCivic");

let carModel: number = 2017;
// False:
console.log("Is carModel==2020? I think so this is false: ");
console.log(carModel == 2020);
// True:
console.log("Is carModel==2017? I think so this is True: ");
console.log(carModel === 2017);

let umbrella: string = "OnRainyWeather";
// false:
console.log(
  "We need umbrella on dry weatehr umbrella == OnDryWeather? I think so this is false"
);
console.log(umbrella == "OnDryWeather");
// True:
console.log(
  "We need umbrella on Rainy weatehr umbrella === OnRainyWeather? I think so this is True"
);
console.log(umbrella == "OnRainyWeather");
