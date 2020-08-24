const express = require("express");

const usersDB = require("./usersModel");

const router = express();

// GET all users
router.get("/", (req, res) => {
  usersDB
    .findAll()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// GET user by id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  usersDB
    .findByID(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
