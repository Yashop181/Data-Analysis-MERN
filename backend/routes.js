const express = require('express');
const {getData , addData} = require('./controllers');
const router = express.Router();

router.get("/data", getData)
router.post("/data", addData)
module.exports = router