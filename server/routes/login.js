var express = require('express');
var router = express.Router();



router.post("/", (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify("hi from login"));
});


module.exports = router;