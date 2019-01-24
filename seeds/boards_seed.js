var faker = require('faker');
var fakeBoards = []

for(var i = 1; i < 10; i++){
    var title = faker.name.title();
    var timestamps = faker.date.recent()

    fakeBoards.push({
        title,
        user_id: i,
        created_at: timestamps,
        updated_at: timestamps
    })
}

exports.seed = function(knex, Promise) {
    return Promise.all([
        knex('boards')
            .del()
            .then(function () {
                return knex('boards').insert(fakeBoards);
            })
    ])
};
