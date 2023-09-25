"use strict";
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
Object.defineProperty(exports, "__esModule", { value: true });
let favorite_pizzas = ["fajita", "KababStuff", "cheesStff"];
console.log("My favorite_Pizzas Are:");
for (const pizza of favorite_pizzas) {
    console.log(`${pizza}`);
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
console.log("\nI like pizzaz:");
favorite_pizzas.forEach((pizza) => {
    console.log(`I like ${pizza} Pizza`);
});
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("\n I really love to eat pizza and most favorites are kabab stuff and chees stuff.");
