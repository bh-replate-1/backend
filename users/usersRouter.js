const express = require("express");

const router = express();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Users router is working." });
});

module.exports = router;
