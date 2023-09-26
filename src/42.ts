// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician_Name: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Criss Angel",
  "Doug Henning",
  "Dynamo",
];
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

function make_great(magician: string[]): string[] {
  const greatmegician: string[] = magician.map(
    (magician) => `Great Magician ${magician}`
  );
  return greatmegician;
}
const greatMegicianNames: string[] = make_great(magician_Name);

console.log("original Magician Names:");
show_magicians(magician_Name);

console.log("\nAfter add some line:");
show_magicians(greatMegicianNames);
