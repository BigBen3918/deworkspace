require("dotenv").config;

// const { UserController } = require("../controllers/userController");

module.exports = {
    message: async (req, res) => {
        try {
            console.log(req.body);
        } catch (err) {
            console.log(err);
            res.json({ status: false, msg: "Server Error" });
        }
    },
};
