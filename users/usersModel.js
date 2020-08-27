const db = require("../data/dbConfig.js");
const Food = require("../food/foodModel");

module.exports = {
  insert,
  findBy,
  findAll,
  findByID,
  update,
  removeUser,
};

async function insert(user) {
  const [id] = await db("users").insert(user);

  return findByID(id);
}

function findBy(filter) {
  return db("users").where(filter).first();
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

function removeUser(id) {
  return db("users").where({ id }).delete();
}
