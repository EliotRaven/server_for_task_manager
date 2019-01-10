
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('lists_tasks', function (table) {
            table.increments('id').unsigned().unique().primary();
            table.integer('list_id').unsigned();
            table.integer('task_id').unsigned();
            table.foreign('list_id').references('id').inTable('lists');
            table.foreign('task_id').references('id').inTable('tasks');
            table.timestamps()
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('lists_tasks')
    ])
};
