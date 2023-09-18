// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

let guestList: string[] = [
  "Shahid Afridi",
  "Babar Azam",
  "Virat Kohli",
  "Waqar Younus",
  "Kane Williamson",
  "Benn Stoke",
  "Shanaka",
  "Mishbah-ul-Haq",
];

console.log("Two people will be allow for dinner");

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestList.length > 2) {
  let removeGuest = guestList.pop();
  console.log(`Sorry ${removeGuest}, I can't invite you to dinner`);
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.

for (let AllguestWhichWeAreInviting of guestList) {
  console.log(
    `Dear ${AllguestWhichWeAreInviting}, You are still invited to dinner `
  );
}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

guestList.pop();
guestList.pop();
console.log("Now the guest list is Empty: ",guestList);
