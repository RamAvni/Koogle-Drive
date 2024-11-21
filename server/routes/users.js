var express = require("express");
var router = express.Router();
var app = express();
const path = require("path");
const fs = require("fs");

router.patch("/*", (req, res) => {
    const lastSlashIndex = req.url.lastIndexOf("/");
    const parentDirectoryURL = req.url.slice(0, lastSlashIndex);
    const newURL = `${parentDirectoryURL}/${req.body.newName}`;

    fs.renameSync(path.join(__dirname, `../db/userfiles${req.url}`), path.join(__dirname, `../db/userfiles${newURL}`));
    res.send(`Changed ${req.url} into ${newURL}`);
});

router.delete("/*", (req, res) => {
    fs.unlinkSync(path.join(__dirname, `../db/userfiles${req.url}`));
    res.send(`Deleted ${req.url}`);
});

router.post("/*", (req, res) => {});

function getFiles(url) {
    const fileArray = fs.readdirSync(path.join(__dirname, `../db/userfiles/${url}`));
    const files = fileArray.map((file) => {
        const stat = fs.statSync(path.join(__dirname, `../db/userfiles/${url}`));
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

router.get("/*", (req, res) => {
    res.send(JSON.stringify(getFiles(req.url)));
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify("hi"));
});

module.exports = router;
