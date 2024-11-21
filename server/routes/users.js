var express = require("express");
var router = express.Router();
var app = express();
const path = require("path");
const fs = require("fs");

router.post("/*", (req, res) => {
  console.log(req.url);
  res.send(req.url);
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
