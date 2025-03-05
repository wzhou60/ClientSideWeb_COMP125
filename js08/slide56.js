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
//console.log(employee);

//Sample expression that returns only the name property of an object:
let b = JSON.stringify({name: "Keisha Adams", age: 27}, ['name'])
console.log(b);
// returns '{"name":"Keisha Adams"}'

