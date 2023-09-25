"use strict";
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
Object.defineProperty(exports, "__esModule", { value: true });
let animalName = ["cow", "horse", "donkey"];
console.log("Name of Animals:");
for (const animal of animalName) {
    console.log(animal);
}
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
console.log("\nStatement for each Animals:");
for (const animal of animalName) {
    if (animal === "cow") {
        console.log(`The ${animal} can see in 360 degrees.`);
    }
    else if (animal === "horse") {
        console.log(`${animal} are powerful and tall animals that can run very fast.`);
    }
    else if (animal === "donkey") {
        console.log(`A ${animal} is used for carrying the load.`);
    }
}
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log("\nCommon in these Animals:");
console.log("Horses,Donkeys and cows are herbivorous animals that mainly feed on grasses and plants.");
