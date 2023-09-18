"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
Object.defineProperty(exports, "__esModule", { value: true });
let fivePlaces = [
    "pyramids of Giza",
    "Amazon rainforest",
    "Taj Mahal",
    "Grand Canyon",
    "Colosseum",
];
// • Print your array in its original order.
console.log(" \n Five_Places are not in alphabetical order");
console.log(fivePlaces);
// • Print your array in alphabetical order without modifying the actual list.
console.log("\n This array is in alphabetical order without modifying the actual list: ");
console.log([...fivePlaces].sort());
// • Show that your array is still in its original order by printing it.
console.log("\n Array still in original order:");
console.log(fivePlaces);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n This array is in reverce alphabetical order without changing the order of the original list: ");
console.log([...fivePlaces].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("\n Array still in original order:");
console.log(fivePlaces);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n Revrse the order of your list: ");
fivePlaces.reverse();
console.log(fivePlaces);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Revrse the order of your list and it's back to original order: ");
fivePlaces.reverse();
console.log(fivePlaces);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("It's stored in alphabetical order: ");
fivePlaces.sort();
console.log(fivePlaces);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("It's stored in reverse alphabetical order: ");
fivePlaces.sort().reverse();
console.log(fivePlaces);
