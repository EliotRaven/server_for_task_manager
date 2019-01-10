var faker = require('faker');
var bcrypt = require('bcrypt');

var fakeUsers = []
var password = 'secret'

for(var i = 1; i < 10; i++){
    var firstName = faker.name.firstName();
    var secondName = faker.name.lastName();
    var randomEmail = faker.internet.email();
    var randomPassword = bcrypt.hashSync(password, 10);
    var timestamps = faker.date.recent()

    fakeUsers.push({
        first_name: firstName,
        second_name: secondName,
        email: randomEmail,
        password: randomPassword,
        created_at: timestamps,
        updated_at: timestamps
    })
}

exports.seed = function(knex, Promise) {
    return Promise.all([
        knex('users')
            .del()
            .then(function () {
                return knex('users').insert(fakeUsers);
        })
    ])
};
