var express = require("express");
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
        console.log("first check passed");
        let usersjson = fs.readFileSync(PathToDb, "utf-8");
        console.log("usersjson: ", usersjson);
        let users = JSON.parse(usersjson);
        let newId = users[users.length - 1].id + 1;
        console.log(users[users.length - 1].id);
        user.id = newId;
        users.push(user);
        usersjson = JSON.stringify(users);
        fs.writeFileSync(PathToDb, usersjson);
        console.log("i passed the commiting code");
    }

    res.send(JSON.stringify(user));
});

module.exports = router;
