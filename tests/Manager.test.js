const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('This is the Manager class', () => {
        const manager = new Manager('teddy', 1, 'theodore.ayoub@gmail.com', 'office101');

        expect(manager.getOfficeNumber()).toBe('office101');
    });
});