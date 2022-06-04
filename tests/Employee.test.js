// Questions generated during coding

// Need to test all the functions within the Employee class

// importing the employee class to test
const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('This is the base class for all other types of employees', () => {
        // first need to create an employee
        const employee = new Employee('teddy', 1, 'theodore.ayoub@gmail.com');

        // using expect to check the name
        expect(employee.name).toBe(
            // expect.arrayContaining([expect.objectContaining({ name: 'teddy' })])
            "teddy"
        );
        // using expect to check the id
        expect(employee.id).toEqual(
            // expect.arrayContaining([expect.objectContaining({ id: 1 })])
            1
        );
        // using expect to check the email
        expect(employee.email).toBe(
            // expect.arrayContaining([expect.objectContaining({ email: 'theodore.ayoub@gmail.com' })])
            'theodore.ayoub@gmail.com'
        );
    });

});