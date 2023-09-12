"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
const walimaDate = new Date();
let guestList = [
    "Babar Azam",
    "Virat Kohli",
    "Kane Williamson",
    "Benn Stoke",
    "Shanaka",
];
//I will use loop to loop to displa invitation for dinner to guest:
guestList.forEach((guestList) => {
    console.log(`Hello ${guestList}, I am inviting you in my walima on ${walimaDate} `);
});
