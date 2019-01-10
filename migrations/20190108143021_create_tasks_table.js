
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('tasks', function (table) {
            table.increments('id').unsigned().unique().primary();
            table.string('title').notNullable();
            table.boolean('done').notNullable().defaultTo(false);
            table.timestamps()
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('tasks')
    ])
};
