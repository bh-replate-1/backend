const db = require("../data/dbConfig.js")

module.exports = {
    insert,
    findByEmail
}

function insert(user) {
    return db("auth").insert(user);
}

function findByEmail(email) {
    return db("auth").where({ email }).first();
}