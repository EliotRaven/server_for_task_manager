
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('boards', function (table) {
            table.increments('id').unsigned().unique().primary();
            table.string('title').notNullable();
            table.timestamps()
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('boards')
    ])
};
