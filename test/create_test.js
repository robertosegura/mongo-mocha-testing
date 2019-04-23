const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
    it('Saves a user', (done) => {
        const user = new User({ name: 'Robert' });

        user.save()
        .then(() => {
            assert(!user.isNew);
            done();
        });
    })
});
