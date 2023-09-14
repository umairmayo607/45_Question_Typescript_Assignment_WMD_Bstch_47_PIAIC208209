"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = [
    "Babar Azam",
    "Virat Kohli",
    "Kane Williamson",
    "Benn Stoke",
    "Shanaka",
];
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Hello ${guest}, I found a bigger table `);
}
// • Add one new guest to the beginning of your array.
let newGuest = "Shahid Afridi";
guestList.unshift(newGuest);
console.log(guestList);
// • Add one new guest to the middle of your array.
let middleName = "Waqar Younus";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, middleName);
console.log(guestList);
// • Use append() to add one new guest to the end of your list.
let endGuestName = "Mishbah-ul-Haq";
guestList.push(endGuestName);
console.log(guestList);
// • Print a new set of invitation messages, one for each person in your list.
for (let guest of guestList) {
    console.log(`Dear ${guest}, I'm inviting all of you for dinner `);
}
