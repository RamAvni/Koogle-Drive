var express = require("express");
const { doesNotMatch } = require("node:assert");
var router = express.Router();
const fs = require("node:fs");
const path = require("path");
//const firstChecks = require('../public/utilities')
// import {firstChecks} from "../public/utilities"
const PathToDb = path.join(__dirname, "../db/users.json");

router.post("/", (req, res) => {
  console.log("req.body", req.body);
  let username = req.body.username;
  let password = req.body.password;
  let user = {
    username: username,
    password: password,
  };

  // let check1 = firstChecks(username, password)
  if (typeof username === "string" && username.length > 0 && password.length > 0) {
    let usersjson = fs.readFileSync(PathToDb, "utf-8");
    let users = JSON.parse(usersjson);
    doesUserAlreadyExists = users.filter((u) => username === u.username && password === u.password);
    if (doesUserAlreadyExists.length !== 0)
      return res.status(401).json({
        message: "user already exists",
      });

    let newId = users[users.length - 1].id + 1;
    user.id = newId;
    users.push(user);
    usersjson = JSON.stringify(users);
    fs.writeFileSync(PathToDb, usersjson);
  }

  res.send(
    JSON.stringify({
      username: username,
    })
  );
});

module.exports = router;
