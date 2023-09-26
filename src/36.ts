// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, text: string): void {
  console.log(`Size_Of_Shirt: ${size}, Message_Printed_On_Shirt: ${text}`);
}
make_shirt("Small", "Typescript Develper used lint");
make_shirt("Medium", "Learning Typescript");
// make_shirt("Large", "Learning Typescript from UMT");

// we can use another method to call function:
let size: string = "Large";
let text: string = "Learning Typescript from UMT";
make_shirt(size, text);
