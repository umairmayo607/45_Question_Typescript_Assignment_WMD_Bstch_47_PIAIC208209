// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

const make_shirt = (size: string, text: string): void => {
  console.log(`Size_Of_Shirt: ${size}, Message_Printed_On_Shirt: ${text}`);
};
// ("Large,Typescript Developer used lint"));
make_shirt("Large", "Typescript Develper used lint");

// ("Medium,Learning Typescript"));
make_shirt("Medium", "Learning Typescript");

// ("Large,Typescript Developer used lint"));
make_shirt("Small", "Typescript Develper used lint");
