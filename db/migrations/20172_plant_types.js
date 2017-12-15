
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plant_types', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('svg').notNullable()
    table.integer('steps_required').notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plant_types')
};
