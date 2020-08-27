const db = require("../data/dbConfig");

module.exports = {
  insert,
  findAll,
  findByID,
  update,
  removeFood,
};

function insert(food) {
  return db("food")
    .insert(food)
    .then((ids) => {
      const id = ids[0];

      return findByID(id);
    });
}

function findAll() {
  return db("food");
}

function findByID(id) {
  return db("food").where({ id }).first();
}

function update(id, food) {
  return db("food")
    .where({ id })
    .update(food)
    .then((count) => {
      return findByID(id);
    });
}

function removeFood(id) {
  return db("food").where({ id }).delete();
}
