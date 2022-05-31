class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`This is the employee name ${this.name}.`);
        return this.name;
    }

    getId() {
        console.log(`This is the employee id ${this.id}.`);
        return this.id;
    }

    getEmail() {
        console.log(`This is the employee email ${this.email}.`);
        return this.email;
    }

    getRole() {
        return "Employee";
    }

}

module.exports = Employee;