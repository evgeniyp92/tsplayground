// defining an object representing a car

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date('2000-01-01'),
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const boopsi = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary() {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// both oldCivic and boopsi can be used with printSummary
printSummary(oldCivic);
printSummary(boopsi);
