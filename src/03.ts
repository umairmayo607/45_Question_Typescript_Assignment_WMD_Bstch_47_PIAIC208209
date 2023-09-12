//Q:03-- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//Original_Name:

let personName: string = "Muhammad umair Idrees mayo";
console.log(`Original_Name: ${personName}`);

//LowerCase_Name:
let lowercaseName: string = personName.toLocaleLowerCase();
console.log(`Lowercase_Name: ${lowercaseName}`);

//UpperCase_Name:
let uppercaseName: string = personName.toUpperCase();
console.log(`Uppercaes_Name: ${uppercaseName}`);

//TitleCase_Name:
let character: string[] = personName.split(" ");
let titlecaseName: string = "";

for (let i = 0; i < character.length; i++) {
  titlecaseName +=
    character[i].charAt(0).toUpperCase() +
    character[i].slice(1).toLowerCase() +
    " ";
}
console.log(`TitleCase_Name: ${titlecaseName}`);
