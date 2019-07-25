var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05')
  .then(function (response) {
    console.log(response.data); // working fine
    res.render('index');
  })
  .catch(function (error) {
    console.log(error);
  })
});





module.exports = router;
