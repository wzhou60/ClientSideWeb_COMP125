function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

Person.prototype.fullName = function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
};

function Employee(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

function Staff(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

let employee = new Employee("Jane", "Smith");
let staff = new Staff("Keisha", "Adams");

let fullNameEmployee = Person.prototype.fullName.call(employee, "New York", "USA");
console.log(fullNameEmployee); // Logs: Jane Smith, New York, USA

let fullNameStaff = Person.prototype.fullName.call(staff, "Los Angeles", "USA");
console.log(fullNameStaff); // Logs: Keisha Adams, Los Angeles, USA

let fullNameEmployeeApply = Person.prototype.fullName.apply(employee, ["Chicago", "USA"]);
console.log(fullNameEmployeeApply); // Logs: Jane Smith, Chicago, USA

let fullNameStaffApply = Person.prototype.fullName.apply(staff, ["San Francisco", "USA"]);
console.log(fullNameStaffApply); // Logs: Keisha Adams, San Francisco, USA
