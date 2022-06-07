// automatically infers that carMakers is an array of strings
const carMakers = ["ford", "toyota", "chevy"];

// initialized but has no values inside so type is any[]
const carMakers2 = [];

// inference works for complex init as well
const dates = [new Date(), new Date()];

// infers that this is a 2d array (string[][])
const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// ** ----------------------------------------------------------------------- //

// Help with inference while extracting values
const vehicle = carMakers[0]; // vehicle is implicitly string
const myCar = carMakers.pop(); // myCar is implicitly string or undef

// Prevents incompatible values
carMakers.push(100); // throws an error

// Lots of help with prototype methods
carMakers.map((car: string): string => {
  return car;
});

// Flexible -- can put different types inside the arrays
const importantDates: (string | Date)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
importantDates.push(100); // wont chooch

