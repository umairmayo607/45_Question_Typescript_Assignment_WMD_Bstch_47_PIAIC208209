// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

console.log("\n 1:");
let alien_color: string = "green";
if (alien_color === "green") {
  console.log("Congratulation! Player jsut earned 5 point");
} else if (alien_color === "yellow") {
  console.log("Congratulation! Player jsut earned 10 point");
} else if (alien_color === "red") {
  console.log("Congratulation! Player jsut earned 15 point");
}

console.log("\n 2:");
alien_color = "yellow";

if (alien_color === "green") {
  console.log("Congratulation! Player jsut earned 5 point");
} else if (alien_color === "yellow") {
  console.log("Congratulation! Player jsut earned 10 point");
} else if (alien_color === "red") {
  console.log("Congratulation! Player jsut earned 15 point");
}

console.log("\n 3:");

alien_color = "red";
if (alien_color === "green") {
  console.log("Congratulation! Player jsut earned 5 point");
} else if (alien_color === "yellow") {
  console.log("Congratulation! Player jsut earned 10 point");
} else if (alien_color === "red") {
  console.log("Congratulation! Player jsut earned 15 point");
} else {
  console.log("unknow color");
}
