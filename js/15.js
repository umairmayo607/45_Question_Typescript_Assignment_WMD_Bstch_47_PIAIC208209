"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
 • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
 • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
 • Print a second set of invitation messages, one for each person who is still in your list.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
exports.guestList = [
    "Babar Azam",
    "Virat Kohli",
    "Kane Williamson",
    "Benn Stoke",
    "Shanaka",
];
let cantCome = "Benn Stoke";
console.log(`${cantCome} will not come to dinner due to some reason`);
let newGuest = "Bahu Bali";
let indexcantcome = exports.guestList.indexOf(cantCome);
// console.log(indexcantcome);
if (indexcantcome !== -1) {
    exports.guestList[indexcantcome] = newGuest;
}
// console.log(guestList);
console.log("Again Invitation after correction of name:");
exports.guestList.forEach((guest) => {
    console.log(`Dear ${guest} you are invited in my walima which are held on `);
});
