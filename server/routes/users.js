var express = require("express");
var router = express.Router();
var app = express();
const path = require("path");
const fs = require("fs");

function getFiles(url) {
    const fileArray = fs.readdirSync(path.join(__dirname, `../db/userfiles/${url}`));
    const files = fileArray.map((file) => {
        const stat = fs.statSync(path.join(__dirname, `../db/userfiles/${url}/${file}`));
        return {
            name: file,
            type: stat.isFile() ? "file" : "folder",
        };
    });

    return files;
}

const options = {
    root: path.join(__dirname, ".."),
};

/* GET users listing. */
router.get("/:username", function (req, res, next) {
    res.send(JSON.stringify(getFiles(req.params.username)));
});

router.get("/:username/:folder1", function (req, res, next) {
    res.send(JSON.stringify(getFiles(`${req.params.username}/${req.params.folder1}`)));
});

router.get("/:username/:folder1/:folder2", function (req, res, next) {
    res.send(JSON.stringify(getFiles(`${req.params.username}/${req.params.folder1}/${req.params.folder2}`)));
});

router.get("/:username/:folder1/:folder2/:folder3", function (req, res, next) {
    res.send(JSON.stringify(getFiles(`${req.params.username}/${req.params.folder1}/${req.params.folder2}/${req.params.folder3}`)));
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify("hi"));
});

module.exports = router;
