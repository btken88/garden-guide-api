
exports.up = function (knex) {
  return knex.schema.createTable('plants', t => {
    t.increments('id').primary();
    t.string('name');
    t.text('description');
    t.text('image')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('plants')
};
