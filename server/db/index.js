const mongoose = require("mongoose");

module.exports = function () {
    const mongourl = require("../utils/config").mongoURI;

    mongoose
        .connect(mongourl, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.log(err));
};
