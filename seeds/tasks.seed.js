var faker = require('faker');
var fakeTasks = []

for(var i = 1; i < 10; i++){
    var title = faker.name.title();
    var timestamps = faker.date.recent()

    fakeTasks.push({
        title,
        created_at: timestamps,
        updated_at: timestamps
    })
}

exports.seed = function(knex, Promise) {
    return Promise.all([
        knex('tasks')
            .del()
            .then(function () {
                return knex('tasks').insert(fakeTasks);
            })
    ])
};