var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
const PathToDb = path.join(__dirname, "../db/users.json");

router.post("/", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let correctUser;

  if (typeof username === "string" && username.length > 0 && password.length > 0) {
    let usersjson = fs.readFileSync(PathToDb, "utf-8");
    let users = JSON.parse(usersjson);

    correctUser = users.filter((u) => username === u.username && password === u.password);
    if (correctUser.length === 0) {
      return res.status(401).json({
        message: "username or password incorrect",
      });
    }
  }

  res.send(
    JSON.stringify({
      username: username,
      id: correctUser[0].id,
    })
  );
});

module.exports = router;
