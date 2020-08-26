const db = require("../data/dbConfig.js");
const foodDB = require("../food/foodModel");

module.exports = {
  insert,
  findBy,
  findAll,
  findByID,
  update,
  addFood,
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

function addFood(userID, food) {
  const newFood = {
    ...food,
    user_id: userID,
  };

  return db("food")
    .where({ user_id: userID })
    .insert(newFood)
    .then((id) => {
      return foodDB.findByID(id);
    });
}
