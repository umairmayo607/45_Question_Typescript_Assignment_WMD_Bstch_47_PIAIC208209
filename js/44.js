"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwish(...item) {
    console.log("Summary of Sandwich");
    if (item.length === 0) {
        console.log(`Your order has empty. Please add some Sandwiches`);
    }
    else {
        item.forEach((item, index) => {
            console.log(` ${index + 1}. ${item}`);
        });
    }
}
makeSandwish("Panini", "Pastrami on rye", "Pasty barm", "Pattie butty");
makeSandwish("Bagel toast", "Baked bean", "Barros Jarpa", "Bauru");
makeSandwish("Beirute", "Chicken schnitzel", "Chopped cheese", "Conti Roll");
makeSandwish(); //this is for check {if statement is working or not}
