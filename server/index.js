const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();

const routes = require("./api/");
const connectDB = require("./db");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

connectDB();

// Use Routes

routes(router);
app.use("/api", router);

// Building Parts
app.use(express.static(__dirname + "/build"));
app.get("/*", function (req, res) {
    res.sendFile(__dirname + "/build/index.html", function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

const port = require("./utils/config").port;
app.listen(port, () => console.log(`Server running on port ${port}`));
