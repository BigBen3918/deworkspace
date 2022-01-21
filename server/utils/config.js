require("dotenv").config();
const mongoose = require("mongoose");

module.exports = {
    mongoURI: "mongodb://localhost:27017/deworkspace",
    secretOrKey: process.env.TOKEN_SECRET,
    port: 5000,
};
