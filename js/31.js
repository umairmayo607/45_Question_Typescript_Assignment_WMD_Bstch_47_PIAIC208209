"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the list is empty, print the message We need to find some users!
console.log("\nFor non Empty username: \n");
let userName = ["admin", "umair", "ali", "zeshan", "basit"];
//We are useing void because we have no return statement:
function greeting() {
    for (const i in userName) {
        if (userName[i].toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${userName[i]}, thank you for logging in again.`);
        }
    }
}
greeting();
// • Remove all of the usernames from your array, and make sure the correct message is printed.
userName = [];
console.log("\nWe need to find some user: ");
console.log(userName);
