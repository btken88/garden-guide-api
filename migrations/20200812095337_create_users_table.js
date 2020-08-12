
exports.up = function (knex) {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary()
    t.string('email').unique().notNullable()
    t.string('password').notNullable()
    t.string('first_name').notNullable()
    t.string('last_name').notNullable()
    t.integer('zip').notNullable()
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users')
};
