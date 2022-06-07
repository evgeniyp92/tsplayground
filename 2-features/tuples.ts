const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// type aliasing
type Drink = [string, boolean, number];

const pepsi = ["brown", true, 65]; // this has type of array!
const bepis: [string, boolean, number] = ["brown", false, 70]; // an tuple
const blopsi: Drink = ["brown", false, 70]; // an tuple with type aliasing

const carSpecs: [number, number] = [400, 3354]; // what are these number supposed to mean??

const carStats = {
  horsepower: 400,
  curbWeight: 3354,
};
