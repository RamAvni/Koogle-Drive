var express = require("express");
var router = express.Router();
var app = express()

//
const options = {
    root: path.join(__dirname,'..')
};


/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");  
});



router.post("/", (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify("hi"));
});

module.exports = router;
