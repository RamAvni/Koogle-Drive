var express = require("express");
var router = express.Router();
var app = express();
const path = require("path");
const fs = require("fs");

router.post("/*", (req, res) => {
  console.log(req.url);
  res.send(req.url);
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

//
function getFiles(url) {
  const directoryPath = path.join(__dirname, `../db/userfiles/${url}`);
  const fileArray = fs.readdirSync(directoryPath); // Read directory contents

  const files = fileArray.map((file) => {
    const fullPath = path.join(directoryPath, file); // Full path to the file or folder
    const stat = fs.statSync(fullPath); // Get stats for the specific file/folder
    console.log(`${file} is a`, stat.isFile() ? "file" : "folder");

    return {
      name: file,
      type: stat.isFile() ? "file" : "folder", // Check type correctly
    };
  });

  return files; // Return the list of files with type
}

//

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
