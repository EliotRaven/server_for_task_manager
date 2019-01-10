
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('boards_users', function (table) {
            table.increments('id').unsigned().unique().primary();
            table.integer('board_id').unsigned();
            table.integer('user_id').unsigned();
            table.foreign('board_id').references('id').inTable('boards');
            table.foreign('user_id').references('id').inTable('users');
            table.timestamps()
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('boards_users')
    ])
};
