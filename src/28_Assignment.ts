/*Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
 */

console.log(
  "If the person is less than 2 years old, print a message that the person is a baby."
);
let age: number = 1;

if (age < 2) {
  console.log(`Age is ${age}, the person is a baby.`);
} else if (age < 4) {
  console.log(`Age is ${age}, the person is a toddler.`);
} else if (age < 13) {
  console.log(`Age is ${age}, the person is a kid.`);
} else if (age < 20) {
  console.log(`Age is ${age}, the person is a teenager.`);
} else if (age < 65) {
  console.log(`Age is ${age}, the person is a adult.`);
} else {
  console.log(`Age is ${age}, the person is  elder.`);
}

console.log(
  "\n If the person is at least 2 years old but less than 4, print a message that the person is a toddler."
);
age = 3;

if (age < 2) {
  console.log(`Age is ${age}, the person is a baby.`);
} else if (age < 4) {
  console.log(`Age is ${age}, the person is a toddler.`);
} else if (age < 13) {
  console.log(`Age is ${age}, the person is a kid.`);
} else if (age < 20) {
  console.log(`Age is ${age}, the person is a teenager.`);
} else if (age < 65) {
  console.log(`Age is ${age}, the person is a adult.`);
} else {
  console.log(`Age is ${age}, the person is  elder.`);
}

console.log(
  "If the person is at least 4 years old but less than 13, print a message that the person is a kid."
);
age = 10;

if (age < 2) {
  console.log(`Age is ${age}, the person is a baby.`);
} else if (age < 4) {
  console.log(`Age is ${age}, the person is a toddler.`);
} else if (age < 13) {
  console.log(`Age is ${age}, the person is a kid.`);
} else if (age < 20) {
  console.log(`Age is ${age}, the person is a teenager.`);
} else if (age < 65) {
  console.log(`Age is ${age}, the person is a adult.`);
} else {
  console.log(`Age is ${age}, the person is  elder.`);
}

console.log(
  "If the person is at least 13 years old but less than 20, print a message that the person is a teenager."
);
age = 17;

if (age < 2) {
  console.log(`Age is ${age}, the person is a baby.`);
} else if (age < 4) {
  console.log(`Age is ${age}, the person is a toddler.`);
} else if (age < 13) {
  console.log(`Age is ${age}, the person is a kid.`);
} else if (age < 20) {
  console.log(`Age is ${age}, the person is a teenager.`);
} else if (age < 65) {
  console.log(`Age is ${age}, the person is a adult.`);
} else {
  console.log(`Age is ${age}, the person is  elder.`);
}

console.log(
  "If the person is at least 20 years old but less than 65, print a message that the person is an adult."
);
age = 45;

if (age < 2) {
  console.log(`Age is ${age}, the person is a baby.`);
} else if (age < 4) {
  console.log(`Age is ${age}, the person is a toddler.`);
} else if (age < 13) {
  console.log(`Age is ${age}, the person is a kid.`);
} else if (age < 20) {
  console.log(`Age is ${age}, the person is a teenager.`);
} else if (age < 65) {
  console.log(`Age is ${age}, the person is a adult.`);
} else {
  console.log(`Age is ${age}, the person is elder.`);
}

console.log(
  "If the person is age 65 or older, print a message that the person is an elder."
);
age = 80;

if (age < 2) {
  console.log(`Age is ${age}, the person is a baby.`);
} else if (age < 4) {
  console.log(`Age is ${age}, the person is a toddler.`);
} else if (age < 13) {
  console.log(`Age is ${age}, the person is a kid.`);
} else if (age < 20) {
  console.log(`Age is ${age}, the person is a teenager.`);
} else if (age < 65) {
  console.log(`Age is ${age}, the person is a adult.`);
} else {
  console.log(`Age is ${age}, the person is  elder.`);
}


