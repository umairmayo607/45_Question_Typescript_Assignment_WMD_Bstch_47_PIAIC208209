"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let magician_Name = [
    "Harry Houdini",
    "David Copperfield",
    "Criss Angel",
    "Doug Henning",
    "Dynamo",
];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magician) {
    const greatmegician = magician.map((magician) => `Great Magician ${magician}`);
    return greatmegician;
}
const greatMegicianNames = make_great(magician_Name);
//Orignal Array which we declare first time:
console.log("original Magician Names:");
show_magicians(magician_Name);
//After added some line in original array:
console.log("\nAfter add some line:");
show_magicians(greatMegicianNames);
