const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('This is the engineer class', () => {
        const engineer = new Engineer('teddy', 1, 'theodore.ayoub@gmail.com', 'githubUserId');

        expect(engineer.getGithub()).toBe('githubUserId');
    });
});