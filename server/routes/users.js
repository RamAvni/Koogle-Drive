var express = require("express");
var router = express.Router();
var app = express();
const path = require("path");

async function getFileNames(username) {
    const res = await fs.readdir(path.join(__dirname, `../db/userfiles/${username}`));
    const data = res.json();
    return data;
}

const options = {
    root: path.join(__dirname, ".."),
};

/* GET users listing. */
router.get("/:username", function (req, res, next) {
    res.send(getFileNames(req.params.username));
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify("hi"));
});

module.exports = router;
