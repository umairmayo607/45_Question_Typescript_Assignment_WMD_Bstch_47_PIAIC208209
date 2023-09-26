// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define a type for a StudentData:
type studentData = {
  name: string;
  class: string;
  RollNo: number;
  Report: string;
};

// Create an array of StudentData objects
let studentsData: studentData[] = [
  {
    name: "umair",
    class: "BSCS",
    RollNo: 5127,
    Report: "He is good in study",
  },
  {
    name: "zeshan",
    class: "BSCS",
    RollNo: 5132,
    Report: "He is Excellent in study",
  },
  {
    name: "Nasir Bhatti",
    class: "BSCS",
    RollNo: 5129,
    Report: "He is Brellian in study",
  },
  {
    name: "Aziz Bhatti",
    class: "BSCS",
    RollNo: 5222,
    Report: "He is Average in study",
  },
];

console.log("List of studentsData: ");
for (const data of studentsData) {
  console.log(`Name: ${data.name}`);
  console.log(`Class: ${data.class}`);
  console.log(`RollNo: ${data.RollNo}`);
  console.log(`Report: ${data.Report}`);
  console.log();
}
