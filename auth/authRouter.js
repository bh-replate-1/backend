const express = require("express");
const bcrypt = require("bcryptjs");
const generateToken = require("../helpers/generateToken");

const authDB = require("./authModel.js");

const router = express.Router();

//Add token in response
router.post("/register", (req, res) => {
  const userData = req.body;
  if (!userData.email || !userData.password) {
    res.status(401).json({ message: "Please input email and password" });
  } else {
    authDB
      .insert({ userData, password: bcrypt.hashSync(password, 6) })
      .then((user) => {
        const token = generateToken(user);
        res.status(200).json({ message: "Welcome", email: email, token });
      })
      .catch((err) => {
        res.status(500).json({ message: "Error" });
      });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (req.body) {
    authDB
      .findByEmail(email)
      .then((user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({ message: "Welcome", email: email, token });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Error" });
      });
  } else {
    res.status(400).json({ message: "Please input credentials" });
  }
});

module.exports = router;
