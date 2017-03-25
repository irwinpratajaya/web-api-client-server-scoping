var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    meal: ['pizza hut', 'steak', 'nasi', 'nasgor']
  });
})

module.exports = router;
