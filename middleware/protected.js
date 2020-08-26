const jwt = require("jsonwebtoken");
const constants = require("../helpers/constants");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, constants.jwtSecret, (error, decodedToken) => {
      if (error) {
        // token was modified or it expired
        res
          .status(401)
          .json({ message: "Sorry, you're not authorized to use our API." });
      } else {
        // token is valid
        req.decodedToken = decodedToken;
        console.log("Decoded Token", req.decodedToken);
        next();
      }
    });
  } else {
    res
      .status(401)
      .json({ error: "Please provide the necessary credentials." });
  }
};
