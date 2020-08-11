
exports.up = function (knex) {
  return knex.schema.createTable('todos', t => {
    t.increments('id').primary()
    t.text('todo')
    t.integer('userId')
    t.boolean('done').defaultTo(false)
    t.boolean('urgent')
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('todos')
};
