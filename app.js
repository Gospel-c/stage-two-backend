const express = require("express");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const bodyParser = require("body-parser");
const personRoute = require("./route/personRoute");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Prevent SQL injection
app.use(mongoSanitize());

//Helmet middleware for handling secure HTTP response headers
app.use(helmet());

//Route
app.use("/user", personRoute);

module.exports = app;