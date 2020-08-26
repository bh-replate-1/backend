const db = require("../data/dbConfig");

module.exports = {
  insert,
  findAll,
  findByID,
  update,
  toggleComplete,
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

function toggleComplete(id) {
  return db("food")
    .where({ id })
    .update({ completed: true })
    .then((count) => {
      return findByID(id);
    });
}
