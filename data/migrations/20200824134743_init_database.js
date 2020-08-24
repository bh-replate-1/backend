exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("address");
    table.string("phone");
    table.string("name");
    table.string("company");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
