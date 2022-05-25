# Typescript

## Overview of Typescript

Typescript is simply javascript with a type system, which is what we're going to
spend most of the course learning

The goal of the type system is to catch errors during development

TS uses type annotations to analyze the code, and is only active during
development

Important to note TS does not offer any meaningful performance optimization

## How the course will go

We will write some TS code

When we're ready to run our code we will feed it to a typescript compiler to get
raw js

Once we have the raw js we will execute that in Node/Browser

## In short...

Writing TS is just like writing JS with extra documentation

TS has no effect on how code gets run by the browser or by node

Best to think of TS as a friend that is sitting behind you while you're coding

## Setting up the typescript compiler

Set up the compiler by running `npm install -g typescript`

# Application 1 - Fetching JSON (and why we use TypeScript)

We are going to fetch data from an API, create a new project dir, create a 
package.json, set up axios to make a request, and then write the code

## First pass

### what we wrote

```typescript
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(res => {
    console.log(res.data)
}).catch(err => {
    console.log(err)
})
```

### what tsc gave us

```javascript
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (res) {
    console.log(res.data);
}).catch(function (err) {
    console.log(err);
});
```

## using ts-node

TS-Node automatically compiles and runs the code we write

## Rewriting the code

```typescript
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(res => {
    const todo = res.data

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

We wrote some code that had a really nasty bug, and we didn't know about it until
runtime

## Fixing the bugs

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

axios.get(url).then(res => {
    const todo = res.data as Todo

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

axios.get(url).then(res => {
    const todo = res.data as Todo

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

## Refactoring the script

```typescript
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    const todo = res.data as Todo

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
}
```

This straight up throws an error

## Fixing the refactor with type annotations

```typescript
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    const todo = res.data as Todo

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
}
```

