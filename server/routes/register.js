var express = require("express");
const { doesNotMatch } = require("node:assert");
const { error } = require("node:console");
var router = express.Router();
const fs = require("node:fs");
const path = require("path");
//const firstChecks = require('../public/utilities')
// import {firstChecks} from "../public/utilities"
const PathToDb = path.join(__dirname, "../db/users.json");
const basictemp = { bla: "bla" };
const basictempj = JSON.stringify(basictemp);
function handleMakingUserFiles(user) {
  fs.mkdir(path.join(__dirname, `../db/userfiles/${user.username}`), (e) => console.log("Making New User's Directory", e));
  fs.writeFile(path.join(__dirname, `../db/userfiles/${user.username}/directory.json`), "string", (e) => console.log("Writing directory", e));
}

router.post("/", (req, res) => {
  console.log("req.body", req.body);
  let username = req.body.username;
  let password = req.body.password;
  let user = {
    username: username,
    password: password,
  };

  if (typeof username === "string" && username.length > 0 && password.length > 0) {
    let usersjson = fs.readFileSync(PathToDb, "utf-8");
    let users = JSON.parse(usersjson);
    doesUserAlreadyExists = users.filter((u) => username === u.username && password === u.password);
    if (doesUserAlreadyExists.length !== 0)
      return res.status(401).json({
        message: "user already exists",
      });
    //from here only if user exists
    let newId = users[users.length - 1].id + 1;
    user.id = newId;
    console.log("user", user);
    console.log("user.id", user.id);
    handleMakingUserFiles(user);
    users.push(user);
    usersjson = JSON.stringify(users);
    fs.writeFileSync(PathToDb, usersjson);
  }

  res.send(
    JSON.stringify({
      username: username,
      id: user.id,
    })
  );
});

module.exports = router;
