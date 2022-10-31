const express = require("express");
const morgan = require("morgan");
const env = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

env.config();

const app = express();

app.set(process.env.PORT || 4000);

import routes from "./routes/index.routes";
//import apiRouter from "./routes/api";

app.use(morgan("dev"));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: ["http://localhost:4200"],
        optionsSuccessStatus: 200,
    })
);

app.use("/api/", routes);
//app.use("/v2/", apiRouter);

module.exports = app;
