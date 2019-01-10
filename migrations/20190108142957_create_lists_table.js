
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('lists', function (table) {
            table.increments('id').unsigned().unique().primary();
            table.integer('board_id').unsigned();
            table.string('title').notNullable();
            table.timestamps()
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('lists')
    ])
};
