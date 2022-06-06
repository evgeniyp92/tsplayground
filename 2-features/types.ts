// implicit type determination
const today = new Date();
today.getMonth(); // works
today.bingus(); // error

const person = {
    age: 20
}

class Color {}

const red = new Color();

red. // ??? nothing there cause the class is empty