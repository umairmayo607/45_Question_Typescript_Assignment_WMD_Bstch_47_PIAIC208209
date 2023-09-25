"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
Object.defineProperty(exports, "__esModule", { value: true });
// • Make a list of five or more usernames called current_users.
console.log();
let current_users = ["umair", "zeshan", "aziz", "abbas", "talha"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["hassan", "umair", "shoaib", "zeshan", "hamid"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
function checkUserNmae(current_users, new_users) {
    let lowerCaseCurrentUser = current_users.map((user) => user.toLowerCase());
    for (const user of new_users) {
        const lowerCaseNewUser = user.toLowerCase();
        if (lowerCaseCurrentUser.includes(lowerCaseNewUser)) {
            console.log(`Username ${user} is already taken, Enter a new user`);
        }
        else {
            console.log(`Username ${user} is available`);
        }
    }
}
checkUserNmae(current_users, new_users);
