var express = require("express");
var router = express.Router();
var app = express();
const path = require("path");
const fs = require("fs");

function getFileNames(username) {
    const res = fs.readdirSync(path.join(__dirname, `../db/userfiles/${username}`));
    console.log(res);

    return res;
}

const options = {
    root: path.join(__dirname, ".."),
};

/* GET users listing. */
router.get("/:username", function (req, res, next) {
    res.send(JSON.stringify(getFileNames(req.params.username)));
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify("hi"));
});

module.exports = router;
