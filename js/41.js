"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
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
show_magicians(magician_Name);
