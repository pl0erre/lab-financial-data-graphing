var express = require('express');
var router = express.Router();
const axios = require('axios');

/* get data from coindesk GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
})


module.exports = router;
