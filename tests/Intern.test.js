const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('This is the Intern class', () => {
        const intern = new Intern('teddy', 1, 'theodore.ayoub@gmail.com', 'SchoolOfHardKnocks');

        expect(intern.getSchool()).toBe('SchoolOfHardKnocks');
    });
});