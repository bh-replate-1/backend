const jwt = require("jsonwebtoken");
const constants = require("../helpers/constants.js");

function generateToken(user) {
  const payload = {
    subject: user.id,
    email: user.email,
  };

  const secret = constants.jwtSecret;

  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, secret, options);
}

module.exports = generateToken;
