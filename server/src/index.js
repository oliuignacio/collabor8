"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var index_1 = require("./models/index");
var user_router_1 = require("./router/user.router");
var collab_router_1 = require("./router/collab.router");
var express_session_1 = require("express-session");
var morgan_1 = require("morgan");
var PORT = 3001;
var app = (0, express_1["default"])();
var corsConfig = {
    origin: "http://localhost:3000",
    credentials: true
};
app.use((0, morgan_1["default"])('dev'));
app.use((0, cors_1["default"])(corsConfig));
app.use(express_1["default"].json());
var sid = {
    name: "sid",
    secret: "SuperSecretPassword",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: false,
        sameSite: true,
        secure: false
    }
};
app.use((0, express_session_1["default"])(sid));
app.use(user_router_1["default"]);
app.use("/collab", collab_router_1["default"]);
var notFound = function (req, res) {
    res.status(404).send("404 not found");
};
app.get("*", notFound);
var serverDidntStart = function (err) {
    if (err) {
        console.log("Server couldn't start. Error: ".concat(err));
    }
    else {
        console.log("Server listening on port ".concat(PORT));
        (0, index_1["default"])();
    }
};
app.listen(PORT, serverDidntStart);
module.exports = app;
