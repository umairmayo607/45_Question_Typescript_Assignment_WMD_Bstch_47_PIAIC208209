"use strict";
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
Object.defineProperty(exports, "__esModule", { value: true });
// "Lahore, Pakistan"
const city_country = (city, country) => {
    return `"${city}, ${country}"`;
};
// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log(city_country("Lahore", "pakistan"));
console.log(city_country("Chicago", "USA"));
console.log(city_country("London", "UK"));
