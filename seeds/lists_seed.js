var faker = require('faker');
var fakeLists = []

for(var i = 1; i < 10; i++){
    var title = faker.name.title();
    var board_id = i;
    var timestamps = faker.date.recent()

    fakeLists.push({
        title,
        board_id,
        created_at: timestamps,
        updated_at: timestamps
    })
}

exports.seed = function(knex, Promise) {
    return Promise.all([
        knex('lists')
            .del()
            .then(function () {
                return knex('lists').insert(fakeLists);
            })
    ])
};
