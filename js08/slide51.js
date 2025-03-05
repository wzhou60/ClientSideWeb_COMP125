// Define an associative array (object) with key-value pairs
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
};

// Use a for...in loop to iterate over the properties of the associative array
console.log("Using for...in loop to iterate over properties:");
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Use Object.hasOwnProperty to filter out inherited properties (if necessary)
console.log("\nUsing for...in loop with hasOwnProperty check:");
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}
    
