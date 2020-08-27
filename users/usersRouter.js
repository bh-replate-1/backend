const express = require("express");

const Users = require("./usersModel");
const checkToken = require("../middleware/checkToken");

const router = express();

// GET all users
router.get("/", checkToken, (req, res) => {
  Users.findAll()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// GET user by id
router.get("/:id", checkToken, (req, res) => {
  const id = req.params.id;

  Users.findByID(id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "That user wasn't found." });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Update (PUT) user by id
router.put("/:id", checkToken, (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  Users.findByID(id)
    .then((found) => {
      if (found) {
        Users.update(id, updates)
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

// Delete user by id
router.delete("/:id", checkToken, (req, res) => {
  const id = req.params.id;

  Users.findByID(id)
    .then((found) => {
      if (found) {
        Users.removeUser(id)
          .then((response) => {
            res.status(204).end();
          })
          .catch((error) => {
            res
              .status(500)
              .json({ error: "Sorry, that user couldn't be deleted." });
          });
      } else {
        res.status(404).json({ message: "Sorry, that user doesn't exist." });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
});

module.exports = router;
