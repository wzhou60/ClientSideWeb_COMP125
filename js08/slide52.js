// Define an object with some properties
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
};

// Define an array
let colors = ["red", "green", "blue"];

// Use a for...in loop to iterate over the properties of the associative array
console.log("Using for...in loop to iterate over properties:");
for (let key in person) {
    if (person.propertyIsEnumerable(key)) {
        console.log(key + ": " + person[key]);
    }
}

// Use Object.hasOwnProperty to filter out inherited properties (if necessary)
console.log("\nUsing for...in loop with hasOwnProperty check:");
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}

// Use a for...of loop to iterate over an array
console.log("\nUsing for...of loop to iterate over an array:");
for (let color of colors) {
    console.log(color);
}

// Define a NodeList (simulated here for example purposes)
let nodeList = {
    0: "Node1",
    1: "Node2",
    2: "Node3",
    length: 3,
    [Symbol.iterator]: function* () {
        for (let i = 0; i < this.length; i++) {
            yield this[i];
        }
    }
};

// Use a for...of loop to iterate over a NodeList
console.log("\nUsing for...of loop to iterate over a NodeList:");
for (let node of nodeList) {
    console.log(node);
}
