"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var cors = require("cors");
var users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
var app = express();
var PORT = 3001;
app.use(cors());
app.use(bodyParser.json());
app.get("/users", function (req, res) {
  res.send(users);
});
app.get("/users/:id", function (req, res) {
  var id = Number(req.params.id);
  var user = users.find(function (u) {
    return u.id === id;
  });
  if (user) {
    res.send(user);
  } else {
    res.status(404).send("User not found");
  }
});
app.post("/users", function (req, res) {
  var user = req.body;
  user.id = users.length + 1;
  users.push(user);
  fs.writeFileSync("./users.json", JSON.stringify(users));
  res.send(user);
});
app.put("/users/:id", function (req, res) {
  var id = Number(req.params.id);
  var index = users.findIndex(function (u) {
    return u.id === id;
  });
  if (index !== -1) {
    var user = req.body;
    user.id = id;
    users[index] = user;
    fs.writeFileSync("./users.json", JSON.stringify(users));
    res.send(user);
  } else {
    res.status(404).send("User not found");
  }
});
app["delete"]("/users/:id", function (req, res) {
  var id = Number(req.params.id);
  var index = users.findIndex(function (u) {
    return u.id === id;
  });
  if (index === -1) {
    res.status(404).send("User with id ".concat(id, " not found"));
  } else {
    users.splice(index, 1);
    fs.writeFileSync("./users.json", JSON.stringify(users));
    res.send("User with id ".concat(id, " deleted"));
  }
});
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});
