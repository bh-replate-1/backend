exports.up = function (knex) {
  return knex.schema.createTable("auth", (table) => {
    table.increments();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("auth");
};
