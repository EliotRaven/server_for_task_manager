exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function (table) {
            table.increments('id').unsigned().unique().primary();
            table.string('first_name').notNullable();
            table.string('second_name').notNullable();
            table.string('email').notNullable().unique();
            table.string('password').notNullable();
            table.string('remember_token').nullable();
            table.timestamps()
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users')
    ])
};
