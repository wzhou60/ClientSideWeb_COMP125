// slide 46-47
function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.name = function() {
        return this.firstName + "." + this.lastName;
    }
}

function Employee(fName, lName) {
    Person.call(this, fName, lName); // Call Person constructor
    this.email = function() {
        return this.name() + "@example.com";
    }
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

function Staff(fName, lName) {
    Employee.call(this, fName, lName); // Call Employee constructor
    this.title = null;
    this.id = function() {
        return this.email() + " [" + this.title + "]";
    }
}
Staff.prototype = Object.create(Employee.prototype);
Staff.prototype.constructor = Staff;

let hire = new Staff("Keisha", "Adams");
hire.title = "Programmer";
console.log(hire.id());
// logs Keisha.Adams@example.com [Programmer]
