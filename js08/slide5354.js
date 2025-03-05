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

// No need to parse, employee is already an object
console.log(employee);

// Sample uses of accessing the properties:
console.log(employee["name"]); // returns "Keisha Adams"
console.log(employee.age); // returns 27
console.log(employee.address.city); // returns "Ithaca"

// Corrected access to phone type
console.log(employee["phone"][0].type); // returns "work"
