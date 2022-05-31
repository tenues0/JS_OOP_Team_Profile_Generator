const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        console.log(`this is the interns school: ${this.school}`)
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;