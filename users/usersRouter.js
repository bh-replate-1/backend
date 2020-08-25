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

// Update (PUT) user by id
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  usersDB
    .findByID(id)
    .then((found) => {
      if (found) {
        usersDB
          .update(id, updates)
          .then((user) => {
            res.status(200).json(user);
          })
          .catch((error) => {
            res.status(500).json({
              error: "Sorry, user could not be updated at this time.",
            });
          });
      } else {
        res.status(404).json({ message: "Sorry, that user doesn't exist." });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: "There was an error finding the user. Please try again.",
      });
    });
});

module.exports = router;
