
exports.up = function (knex) {
  return knex.schema.createTable('user_plants', t => {
    t.increments('id').primary()
    t.integer('userId')
    t.integer('varietyId')
    t.text('notes')
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user_plants')
};
