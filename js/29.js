"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
Object.defineProperty(exports, "__esModule", { value: true });
// // • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["grapes", "strawberry", "banana"];
if (favorite_fruits.includes("grapes")) {
    console.log("I like Grapes~");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("I like Strawberry~");
}
if (favorite_fruits.includes("banana")) {
    console.log("I like Banana~");
}
if (favorite_fruits.includes("orange")) {
    console.log("I like Ornage~");
}
if (favorite_fruits.includes("apple")) {
    console.log("I like Apple~");
}
