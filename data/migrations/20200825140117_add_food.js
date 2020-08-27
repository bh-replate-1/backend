exports.up = function (knex) {
  return knex.schema.createTable("food", (table) => {
    table.increments();
    table.string("food_item").notNullable();
    table.integer("quantity").defaultTo(1);
    table.string("use_by_date").notNullable();
    table.boolean("refrigerate").defaultTo(true);
    table.boolean("completed").defaultTo(false);
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("food");
};
