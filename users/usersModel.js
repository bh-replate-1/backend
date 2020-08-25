const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  findByEmail,
  findAll,
  findByID,
  update,
};

function insert(user) {
  return db("users").insert(user);
}

function findByEmail(email) {
  return db("users").where({ email }).first();
}

function findAll() {
  return db("users").select(
    "id",
    "name",
    "email",
    "address",
    "phone",
    "company"
  );
}

function findByID(id) {
  return db("users")
    .where({ id })
    .select("id", "name", "email", "address", "phone", "company")
    .first();
}

function update(id, user) {
  return db("users")
    .where({ id })
    .update(user)
    .then((count) => {
      return findByID(id);
    });
}
