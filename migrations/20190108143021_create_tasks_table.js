
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('tasks', function (table) {
            table.increments('id').unsigned().unique().primary();
            table.integer('list_id').unsigned();
            table.integer('board_id').unsigned();
            table.string('title').notNullable();
            table.boolean('done').notNullable().defaultTo(false);
            table.integer('position').unsigned().defaultTo(1);
            table.timestamps()
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('tasks')
    ])
};
