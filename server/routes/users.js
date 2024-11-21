var express = require("express");
var router = express.Router();
var app = express();
const path = require("path");
const fs = require("fs");

// router.post("/*", (req, res) => {
//     console.log(req.url);
//     res.send(req.url);
// });

router.patch("/*", (req, res) => {
    const lastSlashIndex = req.url.lastIndexOf("/");
    console.log(req.url, lastSlashIndex);
    const parentDirectoryURL = req.url.slice(0, lastSlashIndex);
    const newURL = path.join(__dirname, `../db/userfiles${parentDirectoryURL}/${req.body.newName}`);
    console.log("parentDirectoryURL: ", parentDirectoryURL);

    fs.renameSync(path.join(__dirname, `../db/userfiles${req.url}`), newURL);
    res.send(`Changed ${req.url} into ${newURL}`);
});

router.delete("/*", (req, res) => {
    console.log(path.join(__dirname, `../db/userfiles${req.url}`));
    fs.unlinkSync(path.join(__dirname, `../db/userfiles${req.url}`));
    res.send(`Deleted ${req.url}`);
});

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
