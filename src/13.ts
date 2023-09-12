// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoriteTransport: Array<[Transport: string, Model: string]> = [];
favoriteTransport.push(["Car", "MG"]);
favoriteTransport.push(["Motorcycle", "YBR"]);
favoriteTransport.push(["Car", "Sonata"]);

favoriteTransport.forEach(([Transport, Model]) => {
  console.log(`I would like to own ${Transport} ${Model}.`);
});
