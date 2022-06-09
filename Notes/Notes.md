# Typescript

## Overview of Typescript

Typescript is simply javascript with a type system, which is what we're going to
spend most of the course learning

The goal of the type system is to catch errors during development

TS uses type annotations to analyze the code, and is only active during
development

Important to note TS does not offer any meaningful performance optimization

### How the course will go

We will write some TS code

When we're ready to run our code we will feed it to a typescript compiler to get
raw js

Once we have the raw js we will execute that in Node/Browser

### In short

Writing TS is just like writing JS with extra documentation

TS has no effect on how code gets run by the browser or by node

Best to think of TS as a friend that is sitting behind you while you're coding

### Setting up the typescript compiler

Set up the compiler by running `npm install -g typescript`

## Course 1 - Fetching JSON (and why we use TypeScript)

We are going to fetch data from an API, create a new project dir, create a
package.json, set up axios to make a request, and then write the code

### First pass

#### what we wrote

```typescript
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios
  .get(url)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
```

#### what tsc gave us

```javascript
'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var axios_1 = __importDefault(require('axios'));
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default
  .get(url)
  .then(function (res) {
    console.log(res.data);
  })
  .catch(function (err) {
    console.log(err);
  });
```

### using ts-node

TS-Node automatically compiles and runs the code we write

### Rewriting the code

```typescript
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((res) => {
  const todo = res.data;

  const ID = todo.id;
  const title = todo.title;
  const finished = todo.finished;

  console.log(`
        The Todo with ID: ${ID}
        Has a title of: ${title}
        Is it finished? ${finished}
    `);
});
```

Got an undefined for finished

We wrote some code that had a really nasty bug, and we didn't know about it
until runtime

### Fixing the bugs

Wouldn't it be nice if we had a comment that outlined what properties `res.data`
would have? Well that's exactly what we're going to do by defining an interface

You can freely ignore properties in an interface if you so desire

```typescript
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
        The Todo with ID: ${ID}
        Has a title of: ${title}
        Is it finished? ${finished}
    `);
});
```

Once we wire up the interface TS throws errors on our const declarations as
having errors

Finished code ⬇️

```typescript
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
});
```

Ultimately, the point of TS is to catch errors in development and get feedback
as we are writing our code

### Refactoring the script

```typescript
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id, completed, title) => {
  console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
};
```

This straight up throws an error

### Fixing the refactor with type annotations

```typescript
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
};
```

## Course overview

The purpose of this course is to learn syntax and features of typescript and
then focus on design patters

Course goals:

1. Understand basic types in TS
2. Function typing + annotations
3. Type definition files
4. Arrays in TS
5. Modules systems
6. Classes + OOP
7. Projects

## Course 2 - Types in TypeScript

### What are types

A type in TS is an easy way to refer to the different properties and functions a
value has

An array has a type, a function has a type, an object has a type and so on

```javascript
'red';
```

the above can be defined as a string, or as a value that has all the properties
and methods that we assume that a string has

string methods in js:

- charAt()
- charCodeAt()
- concat()
- endsWith()
- fromCharCode()
- includes()
- indexOf()
- lastIndexOf()
- localeCompare()
- match()
- etc...

listing out all of this manually is a pain, so we just boil it down and say it's
a string

in some cases types can be non-obvious

interfaces are shortcuts for describing the properties and methods of a type

in Typescript, every value has a type

```javascript
// examples of strings
'hi there', '', 'Today is Monday';

// examples of numbers
0.0000025, -20, 4000000;

// examples of booleans
true, false;

// date
new Date();

// Todo
{
  id: 1;
  completed: true;
  title: 'trash';
}
```

In the world of TS there are two type categories

First, **Primitives**

- number
- boolean
- string
- undefined
- null
- void
- symbol

and **Objects**

- functions
- arrays
- classes
- objects

objects have a separate category because we can trick TS into thinking one value
is a different type with object types, which can be used in a good way

### So why care about types?

Types are used by the typescript compiler to catch errors in advance of
execution, and that is a major benefit of using TS

Types also allow other engineers to understand what values are floating around
in the codebase

### Examples of types

```typescript
// implicit type determination
const today = new Date(); // today has type of Date
today.getMonth(); // works
today.bingus(); // error

const person = {
    age: 20
}

// person is an object and the key age has a value type of number

class Color {}

const red = new Color(); // red is of type Color

red. // ??? nothing there cause the class is empty
```

### When to use types

Everywhere!

## Course 3 - Type Annotations and Type Inference

A type annotation is code that describes what type of value a var refers to

Type inference is when TS tries to figure out what type of value a var refers to

In TA we tell TS the type, in TI TS guesses the type

### Annotations with variables

```typescript
let apples: number = 5; // telling typescript that apples is a number
apples = 10; // this is allowed
apples = '10'; // this is not allowed

// type annotations can be used with any kind of value

let speed: string = 'fast';
speed = 100; // not allowed

let hasName: boolean = true;

// values with a name identical to the type
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();
```

### Annotations with arrays, objects, etc

```typescript
// Arrays
// array of strings
let colors: string[] = ['red', 'green', 'blue'];

// array of numbers
let myNumbers: number[] = [1, 2, 3];

// array of boolean
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// receives an argument of i with type of number and returns void(nothing)
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

const logNumber2: (i: number) => void = function (i) {
  console.log(i);
};
```

### Annotations vs inference

Anytime a variable is made we declare the variable and initialize the variable

With type inference, if you immediately assign a value to a variable TS will
successfully infer what data type the value has

### When to use type annotation

- When we declare a variable and initialize it separately
- When we want a variable to have a type that can't be inferred
- When a function returns any type, and we need to clarify the value

```javascript
// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // type of any
const coordinatesObject: Object = JSON.parse(json); // type of object
const coordinatesAnnotated: { x: number, y: number } = JSON.parse(json);

// in functions like JSON.parse where the return can be a lot of types, TS
// cannot predict that. If you see the 'any' type it means TS has no idea what
// is going to return. Any is still a type, but it has no property refs, so it
// does not make sense to use this in TS

coordinates.bingus(); // TS has no idea what type is, so it will not do anything

// 2) When we declare a variable on one line and init it later
let words = ['red', 'green', 'blue'];
// let foundWord // has any type
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variables when the type can't be reasonably inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // false if nothing found, number if something found

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
```

### Function type annotations

Function type annotations help Typescript tell what type of args a function
receives and what type of values it will return

Type inference allows TS to try to guess what a function will return, and does
not attempt to figure out what type of value arguments are

```typescript
// annotating the argument types and the return type
const add = (a: number, b: number): number => {
  return a + b;
};
```

TS only validates types, not logic

TS won't complain if you return `a - b` in the above function

TS can read function bodies and guess at what the return value from a function
is

But it always helps to annotate anyway because it's a good way to ensure you
have consistent returns

#### Alternate syntax for functions

```typescript
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => a + b;

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};
```

#### The void return type

`void` means the function doesnt return anything

it can however return null or undefined

will throw an error if you try to return something

`never` means the function will not ever get to the end

#### Annotating destructuring

```typescript
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
```

### Annotations with objects

```typescript
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

// const age = profile.age;
// with destructuring you still have to write out the expected structure of arg
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
```

## Course 4 - Typed Arrays

Typed arrays are arrays where each element is some consistent type of value

Arrays are generally one-type, but there is also a specific way to add multiple

### Examples

```typescript
// automatically infers that carMakers is an array of strings
const carMakers = ['ford', 'toyota', 'chevy'];

// initialized but has no values inside so type is any[]
const carMakers2 = [];

// inference works for complex init as well
const dates = [new Date(), new Date()];

// infers that this is a 2d array (string[][])
const carsByMake = [['f150'], ['corolla'], ['camaro']];
```

### Why care?

```typescript
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
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(100); // wont chooch
```

### When to use?

Use any time you want to present a collection of records with some arbitrary
sort order

## Course 5 - Tuples

### What's a tuple

Tuples are array-like structures where each element represents some property of
a record

Tuples usually contain multiple properties to describe a single thing

Tuples also mix and match multiple data types

An object representing a drink could have a property of 'brown', a carbonated
value of 'true', and a sugar content of '40'

Object representation

```json
{
  "color": "brown",
  "carbonated": true,
  "sugar": 40
}
```

Array representation

```js
['brown', true, 40];
```

In this case we would have to remember the sequence of properties, so the
self-labeling aspect of objects is lost

Ordering in a tuple is really critical

### Tuples in use

```typescript
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// type aliasing
type Drink = [string, boolean, number];

const pepsi = ['brown', true, 65]; // this has type of array!
const bepis: [string, boolean, number] = ['brown', false, 70]; // an tuple
const blopsi: Drink = ['brown', false, 70]; // an tuple with type aliasing
```

### Why use tuples

Tuples are very handy for working with csv

But the lack of descriptiveness is a major issue

```typescript
const carSpecs: [number, number] = [400, 3354]; // what are these number supposed to mean??
```

Object format is far better for code being self-documenting and understandable

## Course 6 - Interfaces

### What

Interfaces and Classes are how we get really strong code reuse in TS, so they
are important to get a good handle on

An interface creates a new type, describing the property names and value types
of an object

### Interface examples

```typescript
// defining an object representing a car

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
```

reworking it with an interface

```typescript
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
```

We are not limited to expressing primitives in an interface

```ts
interface Vehicle {
  name: string;
  // we can use any type we want in interfaces
  year: Date;
  broken: boolean;
  // anything that wants to be a vehicle must have a function that prints a summary
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

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
```

Interfaces are not exhaustive listings of properties but a list of mandatory
requirements

```ts
interface Vehicle {
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

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
```

It's important to have descriptive and clear names for interfaces that
accurately describe the point of an interface

Refactoring and genericizing

```ts
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

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
```

### Why its important to use interfaces for code reuse

Interfaces let us specify mandatory requirements for data in a generic way

They are useful to shape data when it is passed to functions and to ensure it
functions properly

```ts
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
```

### Summary

in our code, we have a function that prints a summary. The reportable interface
acts as a gatekeeper to `printSummary`. our objects must satisfy the
`Reportable` interface to work with `printSummary`

**The core strategy of our TS code is that we will create function that accept
arguments that are typed with interfaces**

**Objects and classes can decide to implement a given interface to work with a
function**

## Course 7 - Classes

### What are classes

Classes are blueprints to create objects with some fields and methods to
represent a 'thing'

First we will understand the methods part then the fields part

```ts
class Vehicle {
  drive(): void {
    console.log(`Vroom`);
  }

  honk(): void {
    console.log(`Beep`);
  }
}

const vroomer = new Vehicle();

vroomer.drive();
vroomer.honk();
```

These look a lot like regular ES6 classes but TS classes are kind of different

### Basic inheritance

```ts
class Vehicle {
  drive(): void {
    console.log(`Vroom`);
  }

  honk(): void {
    console.log(`Beep`);
  }
}

class Machine extends Vehicle {
  // when extending we can choose to override the parent class methods
  drive(): void {
    console.log(`Vroom Vroom`);
  }
}

const vroomer = new Machine();

vroomer.drive();
vroomer.honk();
```

### Difference between ES6 and TS classes

#### Modifiers

We can place certain modifiers onto our classes

- Public - can be called anywhere, anytime
- Private - can only be called by other methods in the class
- Protected - can be called by other methods or by methods in child classes

All methods are assumed to be public by default

Defining methods as private is to restrict methods other devs can call, not as a
security measure

```ts
class Vehicle {
  protected honk(): void {
    console.log(`Beep`);
  }
}

class Machine extends Vehicle {
  // when extending we can choose to override the parent class methods
  private drive(): void {
    console.log(`Vroom Vroom`);
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vroomer = new Machine();

vroomer.startDrivingProcess();
```

### Handling data in classes

```ts
class Vehicle {
  color: string;

  // initialize in constructor
  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log(`Beep`);
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Machine extends Vehicle {
  // when extending we can choose to override the parent class methods
  private drive(): void {
    console.log(`Vroom Vroom`);
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vroomer = new Machine();

// vroomer.startDrivingProcess();
```

#### Shorthand to init instance variables

```ts
class Vehicle {
  // shorthand to init instance variables
  constructor(public color: string) {}

  protected honk(): void {
    console.log(`Beep`);
  }
}
```

Important to note that **Modifiers also extend to fields**

### How fields work with inheritance

Typescript automatically runs constructors of parent classes when you init data

If you have a constructor in the child you must call the parent's constructor in
the child constructor with `super`

```ts
class Vehicle {
  // shorthand to init instance variables
  constructor(public color: string) {}

  protected honk(): void {
    console.log(`Beep`);
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Machine extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // when extending we can choose to override the parent class methods
  private drive(): void {
    console.log(`Vroom Vroom`);
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vroomer = new Machine(4, 'red');
vroomer.startDrivingProcess();
```

### Why care and where to use

Interfaces and classes are how we get really strong code reuse in TS

Classes will be used in tandem with interfaces

## Application 1 - Using classes and interfaces in a basic app

First app wiwll be a basic web app that will randomly generate a user/company
and show them on a map

- _installed parcel-bundler globally here_

ran parcel with `parcel-bundler index.html`

classes in TS projects are written with a capital letter

(using fakerjs to automatically generate the data)

for making use of types use the Definitely Typed naming scheme

convention inside of TS is to never use default export statements

you can peruse the types and the data they return as an alternate source of docs

google maps is utilized for this project and we need to install types for it
because without types TS is going to get really upset and not be happy at all

`npm install @types/google.maps`

this will tell TS there will be a global variable called google and what it does

we also have to write a triple slash directive

half of the power of typescript is the increased transparency into how libraries
work and what data they need to work and the inner choochings of it all

### Hiding functionality

Because map has a lot of methods attached to it other engineers may use the
application in ways that will break it

So hiding functionality is a good practice to employ from the start

In the case of the project we want to only limit interaction to making a new map
and adding a marker

This way no unwanted methods are exposed

### Adding markers

#### Bad code for creating markers

```ts
import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  // marking this as private makes it so nobody can access methods but us
  private googleMap: google.maps.Map;

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divID) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  // bad code >:(
  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
    });
  }
}
```

An intermediate step -- defining two acceptable classes for an argument is not
desirable. As our hypothetical number of types to map grows this quickly grows
out of control.

It also very tightly couples all our classes to the map

```ts
// don't do this
  public addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
```

#### Good code for creating markers

instead of CustomMap accomodating all of the edge cases, we will force the
classes to play nice with CustomMap

We're going to provide instructions on how other classes can play nice with our
class. Classes can opt into being mappable, rather than our mapping function
having to accomodating everything

```ts
// instructions to every other class on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  // marking this as private makes it so nobody can access methods but us
  private googleMap: google.maps.Map;

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divID) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  public addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
```

In TS classes have a dual nature. They can be used to instantiate, as well as
refer to a type

interfaces can be exported and referred to as a separate type

```ts
import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name is ${this.name}`;
  }
}
```

Project 1 Done!

## Application 2 - Sorter

We're going to have 3 different data structures to sort, but we're going to
write only one sorter function

- Set up tsconfig and entered into watch mode
- Installed nodemon and concurrently

### Bubble sort and how it chooches

Bubble sort is a double-nested for loop that will iterate several times. For
every iteration it will compare adjacent elements. If left > right, the elements
are swapped. After the first pass, the largest element is guaranteed to be at
the end and you ignore it from then on.

### Writing a bubble sort that only works for numbers

```ts
class Sorter {
  constructor(public collection: number[]) {}

  public sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
```

### Converting the bubble sorter to be more abstract

charcodes mean our previous implementation does not work as we expect

also strings are immutable, so we cannot do character assignment to a string

#### **Bad approach (with unions)**

In the bad approach we create a union between an array of numbers and a string
for types. The issue with that is Typescript looks at the commonalities of
features between number arrays and strings, and realizes there is almost no
commonality, except for reading values. This is going to get even worse when we
add linked lists into the mix

```ts
class Sorter {
  constructor(public collection: number[] | string) {}

  public sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // If collection is array of numbers
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }

        // If collection is array of strings
        // Do this here instead
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
```

#### **Implementing type guards**

```ts
class Sorter {
  constructor(public collection: number[] | string) {}

  public sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // Only going to work if collection is number[]
        // If collection is array of numbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // Only works if collection is string
        // If collection is array of strings
        // Do this here instead
        if (typeof this.collection === 'string') {
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
```

- Use typeof for primitives, and instanceof for values created with a
  constructor

The above implementation is bad because, again, as the list of things to sort
grows we have to cover off more edge cases

Depending on the type of data we're sorting we need different compare and swap
operations

Intermediate solution is to extract swapping and comparison logic to a separate
class

#### **Intermediate refactor**

```ts
// NumbersCollection.ts
export class NumbersCollection {
  constructor(public data: number[]) {}

  // length getter that allows us to check length without calling a func
  get length(): number {
    return this.data.length;
  }

  public compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  public swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
```

```ts
// Sorter.ts
import { NumbersCollection } from './NumbersCollection';

export class Sorter {
  constructor(public collection: NumbersCollection) {}

  public sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
```

```ts
// index.ts
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
```

#### **Adding an interface to the sorter**

```ts
export interface SortableCollection {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
```

#### **Writing the CharactersCollection class**

```ts
import { SortableCollection } from './Sorter';

export class CharactersCollection implements SortableCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const charactersArray = this.data.split('');
    const leftHand = charactersArray[leftIndex];
    charactersArray[leftIndex] = charactersArray[rightIndex];
    charactersArray[rightIndex] = leftHand;
    this.data = charactersArray.join('');
  }
}
```

#### **Writing a linked list**

Interfaces are useful not just to gatekeep classes but also to set up
'contracts' between classes

```ts
import { SortableCollection } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public value: number) {}
}

export class LinkedList implements SortableCollection {
  head: Node | null = null;

  // add a new node to the list
  public add(data: number): void {
    const node = new Node(data);
    // if there is no head (the element is the first in the list), set head to
    // be the node
    if (!this.head) {
      this.head = node;
      return;
    }
    // get a ref to first node in chain
    let tail = this.head;
    // while tail has a ref to next, move the pointer to next, and repeat until
    // there is no next
    while (tail.next) {
      tail = tail.next;
    }

    // assign the node we just created to the tail of the list
    tail.next = node;
  }

  public get length(): number {
    // check if the list actually has any entries
    if (!this.head) {
      // list is empty, return 0
      return 0;
    }

    // count the length with a while loop
    let length = 1;
    // set the marker to the top of the list
    let node = this.head;
    // while the node has a next prop
    while (node.next) {
      // add 1 to the length
      length++;
      // set the node to the next node
      node = node.next;
    }
    return length;
  }

  private at(index: number): Node {
    // if there's no head the list is empty
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    // setting up the counter
    let counter = 0;
    // overriding type inference and saying that node can be set to either a
    // Node or null
    let node: Node | null = this.head;
    // while we have a node
    while (node) {
      // if we've found the right node return it
      if (counter === index) return node;
      // otherwise iterate the counter and set node to refer to next node
      counter++;
      node = node.next;
    }

    // if we have iterated through all the nodes and havent found our desired
    // node throw an error
    throw new Error('Index out of bounds');
  }

  public compare(leftIndex: number, rightIndex: number): boolean {
    // if there's no head the list is empty
    if (!this.head) {
      throw new Error('List is empty');
    }
    // get the values at the indices and compare them
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  public swap(leftIndex: number, rightIndex: number): void {
    // get the values at indices
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    // swap logic
    const leftHand = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = leftHand;
  }

  public print(): void {
    // if there's no entries just return
    if (!this.head) return;
    // set node to be the head
    let node: Node | null = this.head;
    // while theres a node
    while (node) {
      // log the value and set node to be the next node
      console.log(node.value);
      node = node.next;
    }
  }
}
```

### Sort Method Integration

The solution is to use classic inheritance - take all the methods of sorter and
add to target class

The issue emerges when we try to reference properties and methods that aren't on
the parent class but only on the child classes, TS can't figure that out

The solution to that is an abstract class

Abstract classes

- Can't be used to create an object directly
- Can only be used as a parent class
- Can contain real implementation for some methods
- Said methods can refer to other methods that don't yet exist (have to write
  out the methods and their signatures in the class body)
- Can make child classes promise to implement some other methods

Mark abstract classes with `abstract` and declare abstract methods with
`abstract`

```ts
export interface SortableCollection {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  // mark functions which will eventually exist
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  public sort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
```

### Interfaces vs Abstract classes

Strictly speaking we no longer need the interface in the project

Interfaces:

- Set up a contract between different classes
- Are used when we have different objects that we want to work together
- Promotes loose coupling

Inheritance/Abstract Classes:

- Sets up a contract between different classes
- Use when we are trying to build up a definition of an object
- Strongly couples classes together
