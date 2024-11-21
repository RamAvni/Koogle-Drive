var express = require("express");
var router = express.Router();
var app = express();
const path = require("path");
const fs = require("fs");

router.post("/*", (req, res) => {
  console.log(req.url);
  res.send(req.url);
});

router.delete("/*", (req, res) => {
  console.log(path.join(__dirname, `../db/userfiles${req.url}`));
  fs.unlinkSync(path.join(__dirname, `../db/userfiles${req.url}`));
  res.send(`Deleted ${req.url}`);
});

router.delete("/*", (req, res) => {
  console.log(path.join(__dirname, `../db/userfiles${req.url}`));
  fs.unlinkSync(path.join(__dirname, `../db/userfiles${req.url}`));
  res.send(`Deleted ${req.url}`);
});

// function getFiles(url) {
//   const fileArray = fs.readdirSync(path.join(__dirname, `../db/userfiles/${url}`));
//   const files = fileArray.map((file) => {
//     const stat = fs.statSync(path.join(__dirname, `../db/userfiles/${url}`));
//     console.log('stat.isFile() ? "file" : "folder": ', stat.isFile() ? "file" : "folder");
//     return {
//       name: file,
//       type: stat.isFile() ? "file" : "folder",
//     };
//   });

//   return files;
// }

function getFiles(url) {
  const directoryPath = path.join(__dirname, `../db/userfiles/${url}`);
  const fileArray = fs.readdirSync(directoryPath);

  const files = fileArray.map((file) => {
    const fullPath = path.join(directoryPath, file);
    const stat = fs.statSync(fullPath);
    console.log(`${file} is a`, stat.isFile() ? "file" : "folder");

    return {
      name: file,
      type: stat.isFile() ? "file" : "folder",
    };
  });

  return files;
}

function getFile(url) {}

function findCurrentfileType(url) {
  const stat = fs.statSync(path.join(__dirname, `../db/userfiles/${url}`));
  const type = stat.isFile() ? "file" : "folder";
  return type;
}

//

const options = {
  root: path.join(__dirname, ".."),
};

/* GET users listing. */

router.get("/*", (req, res) => {
  if (findCurrentfileType(req.url) === "folder") {
    res.send(JSON.stringify(getFiles(req.url)));
  } else {
    res.sendFile(path.join(__dirname, `../db/userfiles/${req.url}`));
  }
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify("hi"));
});

module.exports = router;
