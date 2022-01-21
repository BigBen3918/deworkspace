const express = require("express");
const router = express.Router();
const User = require("./api_user");

module.exports = (router) => {
    // User API
    router.post("/message", User.message);
};
