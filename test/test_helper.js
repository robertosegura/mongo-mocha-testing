const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true
};

// Run the first time
before((done) => {
    mongoose.connect('mongodb://mongo/users_test', options)
    .then(
        () => { done(); },
        (err) => console.warn('Warning: ', err)
    );
})

// Run it before each test
beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        done();
    });
});