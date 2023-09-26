// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// Tests for equality and inequality with strings:
let a: string = "umair";
console.log(a !== "ali");
console.log(a == "ali");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:

let myAge: number = 22;
console.log("Is my age >= 23? I think so this is false: ");
console.log(myAge >= 23);
//True
console.log("Is my age <= 23? I think so this is True: ");
console.log(myAge <= 23);

// Tests using "and" and "or" operators:
const val1: boolean = true;
const val2: boolean = false;

const result1: boolean = val1 && val2; // Logical "and" operation
const result2: boolean = val1 || val2; // Logical "or" operation

console.log(result1); // Output: false
console.log(result2); // Output: true

// Test whether an item is in a array:
//True:
let myArray: number[] = [1, 2, 3, 4, 5];
const ToFind: number = 3;

if (myArray.includes(ToFind)) {
  console.log(`${ToFind} is True.`);
} else {
  console.log(`${ToFind} is not in the array.`);
}
// false:
let yourArray: number[] = [1, 2, 3, 4, 5];
const TobeFind: number = 7;

if (yourArray.includes(TobeFind)) {
  console.log(`${TobeFind} is True.`);
} else {
  console.log(`${TobeFind} is false.`);
}
