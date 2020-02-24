const express = require("express");
const orm = require("../config/orm");
const router = express.Router();

router.get("/", function(req, res) {
    orm.selectAll(req, res)
});

router.post("/post", function(req, res){
    orm.updateOne(req,res)
});

router.delete("/")

module.exports = router;