const express = require("express");

const router = express();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Auth router is working." });
});

module.exports = router;
