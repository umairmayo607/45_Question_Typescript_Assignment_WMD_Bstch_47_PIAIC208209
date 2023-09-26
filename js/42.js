"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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
console.log("original Magician Names:");
show_magicians(magician_Name);
console.log("\nAfter add some line:");
show_magicians(greatMegicianNames);
