let employee = {
    "name": "Keisha Adams",
    "age": 27,
    "address": {
        "street": "41 Maple Avenue",
        "city": "Ithaca",
        "state": "New York",
        "postal_code": "14850" // It's better to use camelCase or underscores for property names
    },
    "phone": [
        {
            "type": "work",
            "number": "607-555-7812"
        }
    ]
};

// Sample uses of the stringify() method:
console.log(employee);
let a = JSON.stringify(employee, null, 2); // Adds indentation for better readability
console.log(a);

// JSON.stringify(object, [replacer [, space]]);
// replacer is an optional array of text strings and numeric values for filtering the object
// space is an optional argument to insert spaces into the output string

// Example uses of the stringify() method:
console.log(JSON.stringify(27));
// returns '27'

console.log(JSON.stringify(false));
// returns 'false'

console.log(JSON.stringify({ name: "Keisha Adams", age: 27 }));
// returns '{"name":"Keisha Adams","age":27}'

console.log(JSON.stringify(new Date(2024, 5, 4, 13, 15, 8)));
// returns '"2024-06-04T18:15:08.000Z"'
