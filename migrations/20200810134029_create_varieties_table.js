
exports.up = function (knex) {
  return knex.schema.createTable('varieties', t => {
    t.increments('id').primary()
    t.integer('plantId').notNullable()
    t.string('scientificName').notNullable()
    t.string('commonName').notNullable()
    t.text('description')
    t.integer('maturity')
    t.integer('indoor')
    t.integer('outdoor')
    t.string('habit')
    t.string('image')
    t.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('varieties')
};
