const express = require("express");
const bcrypt = require("bcryptjs");
const generateToken = require("../helpers/generateToken");

const usersDB = require("../users/usersModel");
const validateUser = require("../middleware/validateUser");

const router = express.Router();

//Add token in response
router.post("/register", validateUser, (req, res) => {
  const { email, password } = req.body;

  usersDB
    .insert({ email, password: bcrypt.hashSync(password, 6) })
    .then((user) => {
      const token = generateToken(user);
      res.status(201).json({
        message: "Welcome to our API. Here's the user's id, email and JWT",
        id: user.id,
        email: email,
        token,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/login", validateUser, (req, res) => {
  const { email, password } = req.body;

  usersDB
    .findBy({ email })
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: "Welcome to our API. Here's the user's id, email and JWT",
          id: user.id,
          email: email,
          token,
        });
      } else {
        res
          .status(401)
          .json({ message: "Sorry, you're not authorized to use our API." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
