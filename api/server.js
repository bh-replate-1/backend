require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/authRouter");
const usersRouter = require("../users/usersRouter");
const foodRouter = require("../food/foodRouter");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/food", foodRouter);

server.get("/", (req, res) => {
    res.status(200).json({api: "up and running"})
})

module.exports = server;
