// Questions generated during coding
// do I check for the entire object or do I check each piece?
// do I need true and false cases here?

// Need to test all the functions within the Employee class

// importing the employee class to test
const Employee = require('./lib/Employee');

describe('Employee class', () => {
    it('This is the base class for all other types of employees', () => {
        // first need to create an employee
        const employee = new Employee('teddy', 1, 'theodore.ayoub@gmail.com');

        // using expect(), test the constructor consisting of
        // the name, id, and email

        // do I check for the entire object or do I check each piece?
        // using expect to check the name
        expect(employee.name).toEqual(
            expect.arrayContaining([expect.objectContaining({ name: 'teddy' })])
        );
        // using expect to check the id
        expect(employee.id).toEqual(
            expect.arrayContaining([expect.objectContaining({ id: 1 })])
        );
        // using expect to check the email
        expect(employee.email).toEqual(
            expect.arrayContaining([expect.objectContaining({ email: 'theodore.ayoub@gmail.com' })])
        );
    });

    // do I need true and false cases here?
    // using describe() to test the getName() function
    describe('getName', () => {
        it('returns a string containing the name of the employee', () => {

        });
    });

    // using describe() to test the getId() function
    describe('getId', () => {
        it('returns the id of the employee', () => {

        });
    });

    // using describe() to test the getEmail() function
    // it would be nice if I could figure out how to check if an
    // email was entered vice a random string.
    describe('getEmail', () => {
        it('returns a string containing the email of the employee', () => {

        });
    });

});